function test(arg1, arg2, arg3) {
    console.log(({}).polluted);
  
    var arr = arg1.split('.');
    var obj = arr.reduce(getValue.bind(null), {});
    obj[arg2] = arg3;
  
    console.log(({}).polluted);
}

function getValue (accumulator, currentValue) {
  return accumulator[currentValue];
}

test("constructor.prototype", "polluted", "true");