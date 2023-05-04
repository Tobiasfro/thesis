function identity(obj) {
    return obj;
  }
  
  function pp_const(arg1, arg2, arg3) {
    console.log("pp_const:");
    console.log(({}).polluted);
  
    var p = identity(arg1);
    var obj = {abc: ({})};    
    obj[p][arg2] = arg3;
  
    console.log(({}).polluted);
  }
  
  pp_const("__proto__", "polluted", "true");