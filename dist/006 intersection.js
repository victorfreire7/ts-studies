"use strict";
// exemplo: unir dois objetos
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObj = mergeObj;
function mergeObj(obj1, obj2) {
    // return {...obj1, ...obj2};
    return Object.assign({}, obj1, obj2);
}
const obj1 = { key1: 'value1' };
const obj2 = { key2: 'value2' };
const merge = mergeObj(obj1, obj2);
console.log(merge);
