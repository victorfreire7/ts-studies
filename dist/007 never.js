"use strict";
// Never:
// quando uma funçao nao retorna / Mesma funçao do Void
// geralmente usada pra criação de erros.
Object.defineProperty(exports, "__esModule", { value: true });
exports.newErro = newErro;
function newErro() {
    throw new Error('Random Error');
}
newErro();
