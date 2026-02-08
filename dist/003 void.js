"use strict";
// void é uma funçao sem retorno.
// usando o rest operator, nós guardamos todos parametros enviados em um array
function noReturn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
noReturn(1, 40, 2);
// nada esta sendo retornado, apenas exibido.
var person2 = {
    nome: 'victor',
    sobrenome: 'hugo',
    exibirNome: function () {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};
person2.exibirNome();
// --------------------------------
