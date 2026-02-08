"use strict";
// union types é quando uma estrutura
// pode ter mais de um valor diferente
Object.defineProperty(exports, "__esModule", { value: true });
//// string | number | boolean
// type rgb = 'vermelho' | 'verde' | 'azul';
// type cmyk = 'ciano' | 'magente' | 'amarelo' | 'preto';
// type Colors = rgb | cmyk
function addOrConcat(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b; // soma
    return "".concat(a).concat(b);
}
// caso nao haja a validação, o typescript geraria um erro,
// por nao ter certeza do que seja o retorno correto
console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
exports.default = 1;
