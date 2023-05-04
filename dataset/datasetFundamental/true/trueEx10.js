function identity(obj) {
    return obj;
}
  
function pp_const(arg1, arg2, arg3) {
    console.log("pp_const:");
    console.log(({}).foo);
  
    var p = identity(arg1);
    var obj = {};
    obj[p][arg2] = arg3;
  
    console.log(({}).foo);
}

pp_const('__proto__', 'foo', 'true')