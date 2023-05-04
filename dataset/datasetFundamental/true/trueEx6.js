function test() {
    var o = {};
    var o1 = o[arguments[0]];
    o1[arguments[1]] = arguments[2];
}

console.log(({}).polluted);
test('__proto__', 'polluted', 'true')
console.log(({}).polluted);