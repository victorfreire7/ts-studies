"use strict";
// nao existe no JS puro
// utiliza o array
// um array com tipos e tamanhos especificos // variados
var clientData = [1, 'Victor'];
var clientData2 = [1, 'Victor']; // ? no final do type o torna nao obrigatorio
var clientData3 = [1, 'Victor', 'Hugo', 'Freire']; // tambem aceita rest operator
console.log(clientData);
console.log(clientData2);
console.log(clientData3);
// Tuple aceitam os métodos pop() e push(), mesmo nao sendo recomendado
clientData[0] = 100;
clientData.pop();
console.log(clientData);
// Podemos proibir isso usando 'readonly'
var clientData4 = [5, 'João']; // tambem aceita rest operator
// clientData4.pop()
// Property 'pop' does not exist on type 'readonly [number, string]'.
