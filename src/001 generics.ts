/*
O método filter() em JavaScript é utilizado para criar um
novo array contendo apenas os elementos que passam em uma
determinada condição definida por uma função de callback.

const novoArray = arrayOriginal.filter(callback);
*/

// Explicação do que é em README.md
// O código da aula usa Generics para recriar a o método 'filter()'

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean; // o type de uma função que recebe um value e retorna um booleano

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[]{ //<T> indica o valor que foi atribuido
  const newArray = [];

  for(let i = 0; i < array.length; i++){
    if(callbackfn(array[i])){
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a'];

const arrayFiltradoOriginal = array.filter((value) => value == 5);
console.log(arrayFiltradoOriginal);


// se nao fosse os generics, seria preciso realizar um typeguard sempre que nós quisessemos utilizar essa função.
const arrayFiltrado = meuFilter(array, (value) => value == 5);
console.log(arrayFiltrado);

