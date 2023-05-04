function exploit1(string, input, val){
    try {
        var obj = {};
        obj[string][input] = val;
        throw s; 
    }
    catch (exception_var) {
    }
}

function exploit2(string, input, val){
    try {
        var obj = {};
        throw s;
    }
    catch (exception_var) {
        obj[string][input] = val;
    }
}

function exploit3(string, input, val){
    try {
        var obj = {};
        throw s;
    }
    catch (exception_var) {
    }
    finally {
        obj[string][input] = val;
    }
}

function exploit4(string, input, val){
    try {
        var obj = {};
        throw s;
    }
    catch (exception_var) {
    }
    obj[string][input] = val;
}

function exploit5(string, input, val){
    try {
        throw s; 
    }
    catch (exception_var) {
        var obj = {};
    }
    obj[string][input] = val;
}
function exploit6(string, input, val){
    try {
        throw s; 
    }
    catch (exception_var) {
        var obj = {};
        obj[string][input] = val;
    }
}

function exploit7(string, input, val){
    try {
        var obj = {};
        throw s; 
    }
    catch (exception_var) {
    }
    finally{
        obj[string][input] = val;
    }
}

console.log(({}).polluted);
exploit1('__proto__', 'polluted', 'true')
//exploit2('__proto__', 'polluted', 'true')
//exploit3('__proto__', 'polluted', 'true')
//exploit4('__proto__', 'polluted', 'true')
//exploit5('__proto__', 'polluted', 'true')
//exploit6('__proto__', 'polluted', 'true')
//exploit7('__proto__', 'polluted', 'true')
console.log(({}).polluted);

//dottistupid5