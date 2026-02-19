"use strict";
// STATIC é uma utilidade POO do TS que permite o acesso a uma chave ou método
// de uma class sem a instância da mesma.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    Pessoa.criaPessoa = function (nome, sobrenome) {
        return new Pessoa(nome, sobrenome, 0, this.cpfPadrao);
    };
    Pessoa.cpfPadrao = '000.000.000-00';
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoa = Pessoa.criaPessoa('Victor', 'Hugo');
console.log('CPF Padrão: ' + Pessoa.cpfPadrao);
console.log(pessoa);
// Pessoa {
//   nome: 'Victor',
//   sobrenome: 'Hugo',
//   idade: 0,
//   cpf: '000.000.000-00'
// }
