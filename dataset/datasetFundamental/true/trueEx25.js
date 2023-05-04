function merge(dst, src) {
    Object.keys(src).reduce(function (target, key) {
      if (typeof target[key] === 'object') { // yourVariable !== null
          merge(target[key], src[key]);
      } else {
          target[key] = src[key];
      }
  
      return target
    },
    dst);
}

console.log(({}).polluted);
merge({}, JSON.parse('{"__proto__": {"polluted": "true"}}'))
console.log(({}).polluted);
//pp31