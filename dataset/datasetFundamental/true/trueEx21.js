function merge(a, b) {
    let v = Object.keys(b);
    let i = 0;
    while (i < v.length) {
        let attr = v[i];
        if (isObject(a[attr]) && isObject(b[attr])) {
            merge(a[attr], b[attr]);
        } else {
            a[attr] = b[attr];
        }
        i++;
    }
    return a;
}

const isObject = obj => obj && obj.constructor && obj.constructor === Object;

console.log(({}).polluted);
merge({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
console.log(({}).polluted);
//dotti merge while