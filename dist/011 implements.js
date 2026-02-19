"use strict";
/*
  ao criar um type que seja exercida apenas dentro de uma função, nó podemos utilizar duas class para isso;
  utilizando abstract class na super-class. Da seguinte maneira:
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa2 = exports.Pessoa = exports.TipoPessoa = void 0;
var TipoPessoa = /** @class */ (function () {
    function TipoPessoa() {
    }
    return TipoPessoa;
}());
exports.TipoPessoa = TipoPessoa;
var Pessoa = /** @class */ (function (_super) {
    __extends(Pessoa, _super);
    function Pessoa(nome, sobrenome) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.sobrenome = sobrenome;
        return _this;
    }
    Pessoa.prototype.nomeCompleto = function () {
        return this.nome + ' ' + this.sobrenome;
    };
    return Pessoa;
}(TipoPessoa));
exports.Pessoa = Pessoa;
var pessoa = new Pessoa('Victor', 'Hugo');
console.log(pessoa.nomeCompleto());
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
