"use strict";
/*
Abstract é uma utilizade poo que torna obrigatorio a utilização de um método ou atributo dentro de uma
sub-classe; quando usado em uma super-class, faz com que a class tenha como objetivo apenas se extender.

- Super-Classes abstratas nao podem ser instanciadas diretamente
- Super-Classes abstratas são feitas para herdar; nao sendo permitida o uso fora desse contexto
- Métodos abstratos nao podem possuir corp/escopo na super-class

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
exports.Monstro = exports.Guerreira = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, ataque, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }
    Personagem.prototype.atacar = function (personagem) {
        this.bordao();
        personagem.perderVida(this.ataque);
    };
    Personagem.prototype.perderVida = function (forcaAtaque) {
        this.vida -= forcaAtaque;
        console.log("".concat(this.nome, " agora tem ").concat(this.vida, " de vida."));
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Guerreira = /** @class */ (function (_super) {
    __extends(Guerreira, _super);
    function Guerreira() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emoji = "\uD83E\uDDDD";
        return _this;
    }
    Guerreira.prototype.bordao = function () {
        console.log('BORDAO GUERREIRA');
    };
    return Guerreira;
}(Personagem));
exports.Guerreira = Guerreira;
var Monstro = /** @class */ (function (_super) {
    __extends(Monstro, _super);
    function Monstro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emoji = "\uD83E\uDDDF";
        return _this;
    }
    Monstro.prototype.bordao = function () {
        console.log('BORDAO MONSTRO');
    };
    return Monstro;
}(Personagem));
exports.Monstro = Monstro;
var guerreira = new Guerreira('Guerreira', 80, 1200);
var montro = new Monstro('Monstro', 80, 1200);
montro.atacar(guerreira);
