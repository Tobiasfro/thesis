function test(arg1, arg2, arg3) {
    helper2(helper1(arg1), arg2, arg3);
}

function helper1(arg1) {
    var o = {};
    return o[arg1];
}
  
function helper2(arg1, arg2, arg3) {
    arg1[arg2] = arg3;
}

console.log(({}).polluted);
test('__proto__', 'polluted', 'yes')
console.log(({}).polluted);