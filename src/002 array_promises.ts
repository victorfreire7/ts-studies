// Array e Promises sao genericos por padrao.

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6]; // o gteneric <T> já é inserido automaticamente no array, caso nao deixemos explicito o <number>
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((r) => console.log(r + 1));
minhaPromise().then((r) => console.log(r + 1));
