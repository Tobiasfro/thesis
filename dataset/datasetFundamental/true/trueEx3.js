function pp11(arg1, arg2, arg3) {
    console.log(({}).polluted);
  
    if (arg3) {
        var o = {};
        var o1 = o[arg1];
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