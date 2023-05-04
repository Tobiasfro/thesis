function mergeKeys(a, b) {
    Object.keys(b).forEach(attr => {
        if (isObject(a[attr]) && isObject(b[attr])) {
            mergeKeys(a[attr], b[attr]);
        } else {
            a[attr] = b[attr];
        }
    });
    return a;
}

const isObject = obj => obj && obj.constructor && obj.constructor === Object;

console.log(({}).polluted);
mergeKeys({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
console.log(({}).polluted);
//Dotti merge for each