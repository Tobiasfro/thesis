function pp_array_init(arg1, arg2, arg3) {
    let obj = {};
    let proto = obj[arg1];
    let secondItem = {foo: 123};
    return [proto, secondItem];
}
  
function pp_array_assign0(arg1, arg2, arg3) {
    let obj = {};
    let proto = obj[arg1];
    let arr = [];
    arr[0] = proto;
    arr[arg2] = arg3;
}
  
function pp_array_assign1(arg1, arg2, arg3) {
    let obj = {};
    let proto = obj[arg1];
    let arr = [];
    arr = [proto];
    arr[arg2] = arg3;
}
  
function pp_array_assign2(arg1, arg2, arg3) {
    let obj = {};
    let proto = obj[arg1];
    let arr = [];
    arr = { f: proto };
    arr[arg2] = arg3;
}
  
  console.log(({}).polluted);
  pp_array_init("__proto__", "polluted", "true");
  pp_array_assign0("__proto__", "polluted", "true");
  pp_array_assign1("__proto__", "polluted", "true");
  pp_array_assign2("__proto__", "polluted", "true");
  console.log(({}).polluted);