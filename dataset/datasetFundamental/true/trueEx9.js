function merge(dst, src) {
    for (let key in src) {
        if (!src.hasOwnProperty(key)) continue;
        if (typeof dst[key] === 'object') { // yourVariable !== null
            merge(dst[key], src[key]);
        } else {
            dst[key] = src[key];
        }
    }
}

console.log(({}).polluted);
merge({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
console.log(({}).polluted);

//pp3