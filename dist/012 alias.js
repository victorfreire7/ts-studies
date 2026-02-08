"use strict";
// cria uma 'variavel' para tipos
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// agora, ao criar um novo objeto com o type 'Pessoa'
// todas atribuiçoes devem ser seguidas.
// semelhante a um extends (?)
var pessoa = {
    idade: 18,
    nome: "Victor",
    salario: 20000,
};
function setCorPreferida(pessoa, cor) {
    return __assign(__assign({}, pessoa), { corPreferida: cor });
}
console.log(setCorPreferida(pessoa, 'amarelo'));
console.log(pessoa);
