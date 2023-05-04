function test(arg1, arg2, arg3){
    obj = {}
    obj = obj[arg1]
    pp(obj, arg2, arg3)
}

function pp(obj, arg1, arg2){
    obj[arg1] = arg2
}

console.log(({}).polluted);
test('__proto__', 'polluted', 'true')
console.log(({}).polluted);