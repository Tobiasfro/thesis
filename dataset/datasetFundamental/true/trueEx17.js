function mergeFinally(a, b) {
    for (var attr in b) {
        if (isObject(a[attr]) && isObject(b[attr])) {
            mergeFinally(a[attr], b[attr]);
        } else {
            try {
                throw 'myException';
            } catch (e){
            }
            finally{
                a[attr] = b[attr];
            }
        }
    }
    return a;
}

function mergeTryCatch(a, b) {
    for (var attr in b) {
        if (isObject(a[attr]) && isObject(b[attr])) {
            mergeTryCatch(a[attr], b[attr]);
        } else {
            try {
                throw 'myException';
            } catch (e){
                a[attr] = b[attr];
            }
        }
    }
    return a;
}

function mergeTry(a, b) {
    for (var attr in b) {
        if (isObject(a[attr]) && isObject(b[attr])) {
            mergeTry(a[attr], b[attr]);
        } else {
            try {
                a[attr] = b[attr];
                throw 'myException';
            } catch (e){
            }
        }
    }
    return a;
}

const isObject = obj => obj && obj.constructor && obj.constructor === Object;

console.log(({}).polluted);
mergeFinally({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
//mergeTryCatch({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
//mergeTry({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
console.log(({}).polluted);

//Dotti try merge