function test(arg1, arg2, arg3){
    var obj = {}
    var ar1 = 10
    obj[ar1] = 5
    obj[ar1][arg2]=[arg3] // tn
 }

console.log(({}).polluted);
test('__proto__', 'polluted', 'true')
console.log(({}).polluted);