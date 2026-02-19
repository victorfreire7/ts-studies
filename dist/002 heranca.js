"use strict";
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
exports.Cliente = exports.Aluno = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa.prototype.getNomeCompleto = function () {
        return "".concat(this.nome, " ").concat(this.sobrenome);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
;
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aluno.prototype.getNomeCompleto = function () {
        return "Polimorfismo no Aluno = ) ".concat(this.nome, " ").concat(this.sobrenome);
    };
    return Aluno;
}(Pessoa));
exports.Aluno = Aluno;
;
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cliente.prototype.getNomeCompleto = function () {
        return "Polimorfismo no Cliente = ) ".concat(this.nome, " ").concat(this.sobrenome);
    };
    return Cliente;
}(Pessoa));
exports.Cliente = Cliente;
;
var pessoa = new Pessoa('Victor', 'Hugo', 17, '000.000.000-00');
var aluno = new Aluno('Victor', 'Hugo', 17, '000.000.000-00');
var cliente = new Cliente('Victor', 'Hugo', 17, '000.000.000-00');
console.log(pessoa);
console.log(aluno);
console.log(cliente);
console.log('---------------------');
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
