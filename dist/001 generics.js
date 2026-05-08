"use strict";
/*
O método filter() em JavaScript é utilizado para criar um
novo array contendo apenas os elementos que passam em uma
determinada condição definida por uma função de callback.

const novoArray = arrayOriginal.filter(callback);
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.meuFilter = meuFilter;
function meuFilter(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a'];
const arrayFiltradoOriginal = array.filter((value) => value == 5);
console.log(arrayFiltradoOriginal);
// se nao fosse os generics, seria preciso realizar um typeguard sempre que nós quisessemos utilizar essa função.
const arrayFiltrado = meuFilter(array, (value) => value == 5);
console.log(arrayFiltrado);
