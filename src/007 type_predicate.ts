export function isNumber(value: unknown): value is number { // é um retorno boleado, mas eu também afirmo que o parametro que foi enviado é um nunmber
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if(isNumber(sum) && isNumber(value)){
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma('1', '2', '3'));
