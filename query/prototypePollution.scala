import scala.util.control.Breaks._

def prototypePollution() = {
    /*
    * Finds all assignment calls where the left hand side is an index access.
    * Pos example: val1[val2] = val3
    * Neg example: val1 = val2 
    */
    def assignmentWithIndexAccess = cpg.call.where(
          _.name(Operators.assignment).argument(1).isCall.name(Operators.indexAccess)
        )
    
    /*
    * Finds all assignmentWithIndexAccess that is reachable by some function parameter.
    */
    def possiblePollution = assignmentWithIndexAccess.where(
        _.reachableBy(
            cpg.method.parameter.nameNot("this")
        )
    ) ++ assignmentWithIndexAccess.where(
        _.reachableBy(
            cpg.identifier.evalType("IArguments").astParent.isCall
        )
    )
    var found = 0
    for (pp <- possiblePollution) {
        breakable {
            /*
            * Given a possible pollution sink, only select the index access call on the left hand side of the assignment.
            */
            def indexAccessInAssignment = pp.astChildren.order(1).isCall.name(Operators.indexAccess)
            
            /*
            * If the identifier idf in 'idf[arg]' has any other type than an object or ANY, discard the sink as a possible TP.
            */
            def identifierOrCall = indexAccessInAssignment.argument(1)
            if (identifierOrCall.isIdentifier.nonEmpty) {
                if (identifierOrCall.evalType("(ANY|.*(O|o)bject|.*\\{.*\\}.*)").size == 0){
                    break()
                }
            }

            /*
            * Creates a list containing all methodNames to be considered as possible sources.
            * Makes sure that not all method parameters are analyzed, only those parameters that are reachable by the analyzed method should be used
            */
            var nameList = pp.location.methodFullName
            var methodNames = nameList
            while(nameList.splitAt(nameList.lastIndexOf(":"))._2 != ":program"){
              methodNames += "|"
              nameList = nameList.splitAt(nameList.lastIndexOf(":"))._1
              methodNames += nameList
            }
            def callerMethods = cpg.method.fullName(methodNames).caller.fullName
            def recursiveMethodCalls = cpg.method.fullName(methodNames).ast.isReturn.ast.isCall.methodFullName.filterNot(
                _.matches(".*operator.*|.*unknownFullName.*")
            ).dedup

            def additionalMethods = (callerMethods ++ recursiveMethodCalls).dedup

            for(additionalMethod <- additionalMethods){
                methodNames += "|"
                methodNames += additionalMethod
            }
            
            /*
            * Checks that the right hand side of the assignment call can be reached by a method parameter.
            * For example if val in 'obj[idx] = val' can be reached. 
            */
            def valReachable = pp.argument(2).ast.where(
                _.isIdentifier.reachableBy(
                    cpg.method.fullName(methodNames).parameter.nameNot("this")
                )
            ) ++ (pp.argument(2).ast.isCall ++ pp.argument(2).ast.isIdentifier).reachableBy(
                cpg.identifier.evalType("IArguments").astParent.isCall
            )

            /*
            * Given an index access call of obj[idx] the query will give idx as the result.
            */
            def indexArgument = indexAccessInAssignment.argument(2)
            
            /*
            * Checks that indexArgument can be reached by a method parameter.
            */ 
            def indexArgumentTainted = indexArgument.where(
                    _.reachableBy(
                        cpg.method.fullName(methodNames).parameter.nameNot("this")
                    )
                ) ++ indexArgument.where(
                    _.reachableBy(cpg.identifier.evalType("IArguments").astParent.isCall)
                )
            
            /*
            * obj = obj[arg1]
            * obj[arg2] = arg3
            * Query checks that obj[arg2] can be reached by obj[arg1] in the above example
            */
            def lastArgument = identifierOrCall.reachableBy(
                    cpg.call(Operators.indexAccess)
                ).filterNot(
                    node => node.id == indexAccessInAssignment.id.l.head || (node.lineNumber.get == identifierOrCall.lineNumber.l.head && pp.argument(2).id == node.id)
                )
            
            /*
            * If the identifier idf in 'idf[arg]' has any other type than an object or ANY, discard the sink as a possible TP.
            */
            if (lastArgument.argument(1).isIdentifier.nonEmpty) {
                if (lastArgument.argument(1).evalType("(ANY|.*(O|o)bject|.*\\{.*\\}.*)").size == 0){
                    break()
                }
            }

            /*
            * Check that idx in 'obj[idx]' can be reached by a method parameter.
            */
            def lastArgumentTainted = lastArgument.where(
                _.argument(2).reachableBy(
                    cpg.method.fullName(methodNames).parameter.nameNot("this")
                )
            ) ++ lastArgument.where(
                _.argument(2).reachableBy(
                    cpg.identifier.evalType("IArguments").astParent.isCall
                )
            )

            def codeName = pp.code
            def vSize= valReachable.size
            def indexAcSize = indexAccessInAssignment.size
            def indexArgSize = indexArgument.size
            def indexArgumentTaintedSize = indexArgumentTainted.size
            def identifierOrCallSize = identifierOrCall.size
            def lastArgumentTaintedSize = lastArgumentTainted.size
            println(s"$codeName $vSize $indexAcSize $indexArgSize $indexArgumentTaintedSize $identifierOrCallSize $lastArgumentTaintedSize")
            
            /*
            * If all of the subqueries have had atleast one found match each, mark the original assignment call as a TP.
            */
            if (valReachable.size > 0 && indexAccessInAssignment.size > 0 && indexArgument.size > 0 && indexArgumentTainted.size > 0 && identifierOrCall.size > 0 && lastArgumentTainted.size > 0) {
                def symbol = pp.location.symbol
                def linenumber = pp.location.lineNumber.get
                def filename = pp.location.filename
                found += 1
                println(s"Code: $symbol\nLine number: $linenumber\nFile name: $filename\n")
            }
        }
    }
    if (found == 0) {
        println("No pollution found")
    }
}