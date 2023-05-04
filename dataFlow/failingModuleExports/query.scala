def source = cpg.literal.codeExact("42")
def sink = cpg.call("log")
def flows = sink.reachableByFlows(source)

// Should be 1, is 0
flows.size