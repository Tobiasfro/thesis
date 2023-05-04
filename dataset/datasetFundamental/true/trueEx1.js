function test(arg1, arg2, arg3){
    var obj = {}
    obj[arg1][arg2]=arg3
}

console.log(({}).polluted);
test('__proto__', 'polluted', 'true')
console.log(({}).polluted);