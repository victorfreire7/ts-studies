/*
  assim como o type alias, as interfaces sao feitas para moldar objetos e criar 'contratos'. Porém, a interface estta mais presente na P.O.O e é feita exclusivamente para classes e objetos; enquanto o type alias abrange mais alternativas e tem menos restrições.

  */

 export interface TipoPessoa {
   nome: string,
   sobrenome?: string,
   nomeCompleto(): string
  }

  export class Pessoa2 implements TipoPessoa {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }
  }

  const pessoa2 = new Pessoa2('Victor', 'Hugo');
  console.log(pessoa2.nomeCompleto());

  //  Assim como as classes, as interfaces podem estender umas às outras. Isso permite copiar os membros de uma interface para outra, o que oferece mais flexibilidade na forma como você separa suas interfaces em componentes reutilizáveis.

  interface Shape {
    color: string
  }

  interface Square extends Shape {
    sideLength: number;
  }

  let square = {} as Square
  square.color = 'blue';
  square.sideLength = 10;

  console.log(square);

// https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
