"use strict";
// Existem genéricos padrões, já criados e disponibilizados elo typescript
// Alguns deles são:
// Record: Segue o padrão dos paramêtros de chave e valor de um objeto. Nessa respectiva ordem.
const obj1 = {
    nome: "victor",
    sobrenome: "freire",
    idade: 18
};
console.log(obj1);
const obj2 = {
    nome: "victor",
    sobrenome: "freire",
    idade: 18
};
console.log(obj2);
// Partial: Retorna tudo o que era requirido, não obrigatório
const obj3 = {
    nome: "victor",
};
// Readonly
const obj4 = {
    nome: "victor",
    sobrenome: "freire",
    idade: 18
};
const obj5 = {
    nome: 'victor',
    idade: 18
};
console.log(obj5);
const obj6 = {
    id: 'gfugyc-k8765', // Mudamos a chave '_id' -> 'id;
    nome: 'victor',
    idade: 18
};
console.log(obj6);
