function setValueByPath (object, path, value) {
    const pathArray = path.split(".");
    const attributeToSet = pathArray.pop();
    let objectToModify = object;
    for (const attr of pathArray) {
        if (typeof objectToModify[attr] !== 'object') {
            objectToModify[attr] = {};
        }

        objectToModify = objectToModify[attr];
    }

    objectToModify[attributeToSet] = value;
    return object;
}

function setValueByPathArray(a) {
    const object = a[0];
    const path = a[1];
    const value = a[2];
    const pathArray = path.split(".");
    const attributeToSet = pathArray.pop();
    let objectToModify = object;
    for (const attr of pathArray) {
        if (typeof objectToModify[attr] !== 'object') {
            objectToModify[attr] = {};
        }

        objectToModify = objectToModify[attr];
    }

    objectToModify[attributeToSet] = value;
    return object;
}

console.log(({}).polluted);
setValueByPath({}, '__proto__.polluted', 'true')
//setValueByPathArray([{}, '__proto__.polluted', 'true'])
console.log(({}).polluted);