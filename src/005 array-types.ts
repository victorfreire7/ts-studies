// maneiras de criar array:
// generic: Array<Type>
// colchetes: Type[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((accumulator, value) => accumulator * value, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((accumulator, value) => accumulator + value);
}

function toUpperCase(...args: Array<string>): Array<string> {
  return args.map((value) => value.toUpperCase());
}

// uma function que guarda todos argumentos em um array, e espera o retorno de um univo number


console.log(multiplicaArgs(1, 5, 2));
console.log(concatenaString('a', 'b', 'c'));
console.log(toUpperCase('a', 'b', 'c'))
