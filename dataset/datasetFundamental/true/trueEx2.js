function test1(arg1, arg2, arg3){
    var obj = {}
    obj[arg1][arg2]=arg3
}

function test2(arg1, arg2, arg3){
    var obj = {}
    obj[arg2][arg3]=[arg1] 
}

function test3(arg1, arg2, arg3){
    var obj = {}
    var o = obj[arg1]
    o[arg2] = arg3
}

function test4(arg1, arg2, arg3){
    var obj = {}
    var obj = obj[arg1]
    obj[arg2] = arg3
}

console.log(({}).polluted);
test1('__proto__', 'polluted', 'true')
//test2('true', '__proto__', 'polluted')
//test3('__proto__', 'polluted', 'true')
//test4('__proto__', 'polluted', 'true')
console.log(({}).polluted);