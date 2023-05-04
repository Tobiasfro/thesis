function test(key1, key2, val) {
    var node = {};
  
    node[key1] = node[key1] || {}
    node = node[key1]
  
    node[key2] = val
}

console.log(({}).polluted);
test('__proto__', 'polluted', 'true')
console.log(({}).polluted);