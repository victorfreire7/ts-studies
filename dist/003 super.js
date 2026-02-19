"use strict";
// super-classe se referem a Classes que sao extendidas;
// as classes que recebem a extensão, sub-classes
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
// quando estamos dentro de um método de uma Sub-Class que se diz respeito a super;
// muitas vezes precisamos alterar o método e também utilizar ele originalmente.
// podemos instanciar o método da super class usando o atribuido 'super.<methodHere>' anteriormente.
// exemplo em 'class Alunos extends Pessoa'.
// constructor em Sub-Class:
// caso queiramos adicionar uma nova chave em uma Sub Class, é necessario chamar novametne todas
// as chaves da super class sem passar seus atributos (public, private, protected, [...]).
// O que sera criado recebera atributos.
// exemplo em 'class Alunos extends Pessoa'.
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
    function Aluno(nome, sobrenome, idade, cpf, sala) {
        var _this = _super.call(this, nome, sobrenome, idade, cpf) || this; // fazendo isso, passamos novamente todos os valores que foram enviado a Aluno para a Super-Class, sem alterar no Super-Constructor.
        _this.sala = sala;
        _this.sala = sala;
        return _this;
    }
    Aluno.prototype.getNomeCompleto = function () {
        console.log('return before');
        return 'super.getNomeCompleto() = )' + _super.prototype.getNomeCompleto.call(this);
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
var aluno = new Aluno('Victor', 'Hugo', 17, '000.000.000-00', 'A003');
var cliente = new Cliente('Victor', 'Hugo', 17, '000.000.000-00');
console.log(pessoa);
console.log(aluno);
console.log(cliente);
console.log('---------------------');
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
