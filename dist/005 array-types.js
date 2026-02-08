"use strict";
// maneiras de criar array:
// generic: Array<Type>
// colchetes: Type[]
function multiplicaArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (accumulator, value) { return accumulator * value; }, 1);
}
function concatenaString() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (accumulator, value) { return accumulator + value; });
}
function toUpperCase() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.map(function (value) { return value.toUpperCase(); });
}
// uma function que guarda todos argumentos em um array, e espera o retorno de um univo number
console.log(multiplicaArgs(1, 5, 2));
console.log(concatenaString('a', 'b', 'c'));
console.log(toUpperCase('a', 'b', 'c'));
