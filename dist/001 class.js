"use strict";
/*
  Atributos:
    - public: acessivel de todas as maneiras/instancias; dentro de fora da Class.
    - private: encapsulamento. atributo que restringe a acessibilidade apenas para dentro da Class.
    - protected: permite acesso a chave dentro de sua classe e sub-classes.
    - readonly: Atributo que permite apenas a leitura de um dado; nao alterações.

  - Semelhtante a Class no JS;
  - funciona também como Type;
  - Definição e depois Constructor;
  - Podemos também definir dentro do constructor.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    Empresa.prototype.addColaborador = function (colaborador) {
        this.colaboradores.push(colaborador);
    };
    Empresa.prototype.mostrarColaborador = function () {
        for (var _i = 0, _a = this.colaboradores; _i < _a.length; _i++) {
            var colaborador = _a[_i];
            console.log(colaborador);
        }
    };
    return Empresa;
}());
exports.Empresa = Empresa;
var Colaborador = /** @class */ (function () {
    function Colaborador(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
var empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
var colaborador1 = new Colaborador('Victor', 'Hugo');
empresa1.addColaborador(colaborador1);
empresa1.mostrarColaborador();
console.log(empresa1);
