function pp11(arg1, arg2, arg3) {
    console.log("pp11:");
    console.log(({}).polluted);
  
    if (arg3) {
        var o = {10: {}};
        var int = 10
        var arg = int
        var o1 = o[arg];
        o1[arg2] = arg3;
        //o1.foo = arg2;
    } else {
        var op = {};
        var o1 = op['foo1'];
        o1['foo2'] = v;
        //o1.foo = arg2;
    }
  
    console.log(({}).polluted);
  }

  pp11('__proto__', 'polluted', 'true')