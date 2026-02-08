"use strict";
// permitindo que uma nova chave seja adicionada a um objeto ja existente
// podemos usar a tag 'readonly' quando nao queremos que um valor seja alterado dentro de uma chave
// Problema:
var objetoA = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};
objetoA.chaveA; // Acessivel
// objetoA.chaveC // Impossivel criar nova chave
// ------------------------------------------------
// Solução (index signature):
// 1.
var objetoB = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};
objetoB.chaveC = 'Nova chave';
console.log('ObjetoB: ');
console.log(objetoB);
// 2.
var objetoC = {
    chaveA: 'Valor A',
    chaveB: 'Valor B'
};
objetoC.chaveZ = 'Nova chave';
console.log('ObjetoC: ');
console.log(objetoC);
