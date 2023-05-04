function test(arg1, arg2, arg3) {
    var obj = {};
        
    var a = obj[arg1]
    obj[arg2] = a
  }
  
  console.log({}.polluted)
  test("__proto__", "polluted", "yes");
  console.log({}.polluted)