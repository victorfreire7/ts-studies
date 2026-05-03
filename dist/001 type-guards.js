"use strict";
/*
  type-Guard é a ação de previnir que uma função que pode receber dois types
  cumpra sua função incorretamente de acordo com o type que foi inserido.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Aluno = Aluno;
function mostrarNome(obj) {
    // if('nome' in obj) console.log(obj.nome) // Type Guard
    if (obj instanceof Aluno)
        console.log(obj.nome);
}
mostrarNome(new Aluno('Victor'));
/*
  'nome' in obj:
    controle de fluxo que verifica se o valor 'nome' é constado no parametro enviado.

  instanceof:
    sintax js native, confirma se o primeiro parametro enviado
    consta com todos valores solicitador pela instancia
    do segundo parametro.

*/
