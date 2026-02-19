"use strict";
/*
  O tipo de relação de composição é utilizado quando uma class nao eiste sem a outra.
  O exemplo abaixo mosttra um carro de um motor como analogia a essa associação
  Nesta relação, geralmente uma class é instancioada dentro da "pai".

  !!!
  instanciar uma class 'filho' de fora da 'pai', por mais que possivel, é uma má pratica;
  criar funções dentro do pai como visualizaçao/execução

  visualizaçao do diagrama em docs/'008 associacao.png'
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro() {
        this.motor = new Motor();
    }
    Carro.prototype.ligar = function () {
        this.motor.ligar();
    };
    Carro.prototype.desligar = function () {
        this.motor.desligar();
    };
    return Carro;
}());
exports.Carro = Carro;
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.ligar = function () {
        console.log('Motor está ligando...');
    };
    Motor.prototype.desligar = function () {
        console.log('Motor está desligando...');
    };
    return Motor;
}());
exports.Motor = Motor;
var carro = new Carro();
carro.ligar();
carro.desligar();
