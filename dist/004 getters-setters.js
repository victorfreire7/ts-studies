"use strict";
/*
  - Comportamento de atributo;
  - sinal de atribuição (=) acessa o SET;
    > pessoa.cpf = '123.456.789-10';
  - acesso ao atributo convoca o GET;
    > console.log(pessoa.cpf);
 ---------------------------------------------------
 - get: utilizado para retorno de um valor
 - set: utilizado para alteração de um valor
 ---------------------------------------------------
 "_cpf":
    > por se comportar como um atributo, o TS retorna o erro 'duplicate';
    isso pode contornado alteração do cpf -> _cpf
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade, _cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this._cpf = _cpf;
    }
    Object.defineProperty(Pessoa.prototype, "cpf", {
        get: function () {
            console.log('GETTER CHAMADO');
            return this._cpf.replace(/\D/g, '');
        },
        set: function (cpf) {
            console.log('SETTER CHAMADO');
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoa = new Pessoa('Victor', 'Hugo', 17, '000.000.000-00');
pessoa.cpf = '123.456.789-10';
console.log(pessoa.cpf);
