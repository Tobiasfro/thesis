function exploit(string, input, val){
    var inner = string + "";
    var lin = input + "12";
    var link = lin + "3";
    var obj = {};
    var v = val + "111";
    obj[inner][link] = val;
}

function exp2(string, input, val){
    var obj = {};
    obj[string][input] = {prop: val};
}

function exp3(string, input, val){
    var obj = {};
    obj[string][input] = {prop: val}.prop;
}

console.log(({}).polluted123);
exploit('__proto__', 'polluted', 'true')
console.log(({}).polluted123);
console.log(({}).polluted)
exp2('__proto__', 'polluted', 'true')
//exp3('__proto__', 'polluted', 'true')
console.log(({}).polluted)

//dottistupid2