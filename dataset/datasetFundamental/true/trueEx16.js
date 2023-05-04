function merge(a, b) {
    for (var attr in b) {
        if (isObject(a[attr]) && isObject(b[attr])) {
            merge(a[attr], b[attr]);
        } else {
            a[attr] = b[attr];
        }
    }
    return a;
}

const isObject = obj => obj && obj.constructor && obj.constructor === Object;

console.log(({}).polluted);
merge({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
console.log(({}).polluted);
//merge dotti