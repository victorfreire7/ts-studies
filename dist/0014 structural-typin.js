"use strict";
// comportamento exclusivo do typescript
// a identidade do tipo nao importa, somente as restriçoes que fazem parte
/*
  Imagine que você tem uma classe chamada Casa, todas as instâncias da classe Casa são do
  tipo Casa (o tipo da classe). Essa é a identidade do tipo. Linguagens de tipagem mais
  restrita não aceitam nada a não ser o tipo Casa. O TS não liga com essa identidade,
  ele só liga se o elemento cumpre todos os parâmetros para ser uma casa,

  Em resumo, se duas classes tem os mesmos métodos e atributos, tipo Casa e Abrigo (duas
  classes com atributos idênticos) o TS aceitaria um no lugar do outro.
*/
var verifyUser = function (user, sentValue) {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
/*
  quando atribuimos à uma váriavel uma classe, apenas os valores da classe sao atribuidos,
  nao a o valor 'classe' em si; tanto que aqui, podemos adicionar um novo valor a ser
  atribuido, mesmo essa variavel nao estando presente na classe em si
*/
var bdUser = { username: 'victor', password: '123456' };
var sentUser = { username: 'victor', password: '123456', confirmPass: false };
var loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
