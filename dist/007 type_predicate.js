"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
exports.soma = soma;
function isNumber(value) {
    return typeof value === 'number';
}
function soma(...args) {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);
    return retorno;
}
console.log(soma(1, 2, 3));
console.log(soma('1', '2', '3'));
