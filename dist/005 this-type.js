"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBuilder = exports.Calculator = void 0;
class Calculator {
    constructor(number) {
        this.number = number;
    }
    // retorno o this de dentro da class (a própria instancia "Calculator"). permite execuçao de metodos em cadeira
    add(n) {
        this.number += n;
        return this;
    }
    sub(n) {
        this.number -= n;
        return this;
    }
    div(n) {
        this.number /= n;
        return this;
    }
    mul(n) {
        this.number *= n;
        return this;
    }
}
exports.Calculator = Calculator;
const calculator = new Calculator(10); // adiciono 10 como numero inicial
calculator.add(5).mul(2); // <--- execução de métodos em cadeia
/*
  essa utilizaçao acontece pois quando retornamso 'this' dentro das funções, toda a class é retornado.
  a saidea desse exxemplo criado é:
    Calculator { number: 30 }
*/
console.log(calculator);
// GoF - Builder method
// exemplo de um requestBuilder:
class RequestBuilder {
    constructor() {
        this.method = null;
        this.url = null;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    send() {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
}
exports.RequestBuilder = RequestBuilder;
const request = new RequestBuilder();
request.setUrl('https://www.google.com').setMethod('post').send(); // execução de metodos em cadeia
