function test(...args) {
    helper({}[args[0]], args[1], args[2])
}
  
function helper(...args) {
    args[0][args[1]] = args[2]
}

console.log({}.polluted)
test("__proto__", "polluted", "yes");
console.log({}.polluted)