function objInitByKeyCopy(key, key2) {
    let value = {};
    value = value[key];
  
    let keys = Object.keys(key2);
    for (let i = 0; i < keys.length; i++) {
      const prop = keys[i];
      value[prop] = key2[prop]
    }  
}

console.log(({}).polluted);
objInitByKeyCopy('__proto__', {"polluted": "true"})
console.log(({}).polluted);