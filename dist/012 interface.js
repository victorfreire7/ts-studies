"use strict";
/*
  assim como o type alias, as interfaces sao feitas para moldar objetos e criar 'contratos'. Porém, a interface estta mais presente na P.O.O e é feita exclusivamente para classes e objetos; enquanto o type alias abrange mais alternativas e tem menos restrições.

  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa2 = void 0;
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa2.prototype.nomeCompleto = function () {
        return this.nome + ' ' + this.sobrenome;
    };
    return Pessoa2;
}());
exports.Pessoa2 = Pessoa2;
var pessoa2 = new Pessoa2('Victor', 'Hugo');
console.log(pessoa2.nomeCompleto());
var square = {};
square.color = 'blue';
square.sideLength = 10;
console.log(square);
// https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
