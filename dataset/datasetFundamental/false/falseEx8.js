function test1(arg) {
    var arguments = ["q", "w", "e"];
    var o = {};
    var o1 = o[arguments[0]];
    o1[arguments[1]] = arguments[2];
}

function test2(arg) {
    var arguments = ["q", "w", "e"];
    var o = {};
    var arg1 = arguments[0]
    var o1 = o[arg1];
    o1[arguments[1]] = arguments[2];
}

function test3(arg) {
    var arguments = ["q", "w", "e"];
    var o = {};
    var arg1 = arguments[1]
    var o1 = o[arguments[0]];
    o1[arg1] = arguments[2];
}  

function test4(arg) {
    var arguments = ["q", "w", "e"];
    var o = {};
    var arg1 = arguments[2]
    var o1 = o[arguments[0]];
    o1[arguments[1]] = arg1;
}

function test5(arg) {
    var arguments = ["q", "w", "e"];
    var o = {};
    var arg1 = arguments[0]
    var arg2 = arguments[1]
    var arg3 = arguments[2]
    var o1 = o[arg1];
    o1[arg2] = arg3;
}

console.log(({}).polluted);
test1("__proto__", "polluted", "yes");
test2("__proto__", "polluted", "yes");
test3("__proto__", "polluted", "yes");
test4("__proto__", "polluted", "yes");
test5("__proto__", "polluted", "yes");
console.log(({}).polluted);