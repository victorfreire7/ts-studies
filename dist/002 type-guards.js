"use strict";
/*
  Outra maneira muito comumente usada  de type-guards é utilizando swich,
  e adicionando um novo campo 'tipo' no que vai ser filtrado, como no exemplo abaixo:
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.tipo = 'pessoa';
    }
}
exports.Aluno = Aluno;
function mostrarNome(obj) {
    switch (obj.tipo) {
        case 'pessoa':
            console.log(obj.nome);
            return;
        case 'animal':
            console.log('A cor do seu animal é ' + obj.cor);
            return;
    }
}
mostrarNome(new Aluno('Victor'));
mostrarNome({ tipo: 'animal', cor: 'azul' });
