"use strict";
// podemos restringir um generic há uma única funcionalidade.
// o exemplo abaixo cria uma função que recebe um objeto e uma chave, e retorna o valor dentro da chave.
// essa restrição também é chamado de 'contrains'
const obterChave = (objeto, chave) => objeto[chave];
const animal = {
    cor: 'Rosa',
    vacinas: ['vacina1', 'vacina2'],
    idade: 10
};
const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
console.log(vacinas, cor, obterChave(animal, 'idade'));
console.log('----------------------------------------------------');
console.log(animal["vacinas"], animal["cor"], animal["idade"]);
