function test(...args){
    var obj = {}
    obj[args[0]][args[1]]=args[2]
}

console.log(({}).polluted);
test('__proto__', 'polluted', 'true')
console.log(({}).polluted);