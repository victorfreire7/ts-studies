"use strict";
/*
function mapStrings(array: Array<string>, callbackfn: CallableFunction): Array<string> {
  const newArray: Array<string> = new Array;

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i])); //callbackfn ta sendo declarada no parametro
  }

  return newArray;
}
*/
function mapStrings(array, callbackfn) {
    var newArray = new Array;
    for (var i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i])); //callbackfn ta sendo declarada no parametro
    }
    return newArray;
}
var abc = ['a', 'b', 'c'];
var abcMapped = mapStrings(abc, function (item) {
    return item.toUpperCase();
});
console.log(abcMapped);
