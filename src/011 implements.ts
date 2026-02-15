/*
  ao criar um type que seja exercida apenas dentro de uma função, nó podemos utilizar duas class para isso;
  utilizando abstract class na super-class. Da seguinte maneira:
*/

export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
}

export class Pessoa extends TipoPessoa {
  constructor(protected nome: string, protected sobrenome: string) {
    super();
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Victor', 'Hugo');
console.log(pessoa.nomeCompleto())

/*
um outro método alternativo para isso, seria utilizando type. dessa maneira, o 'type', funciona como uma interface, apenas mostrando os itens que tem de ser utilizados, sem conter nenhum poder sobre elas (diferente da utilizaçao da Class).

  Utilizando essa maneira, nao podemos definir um corpo nem os atributos das chaves (public, private, protected) diretamente do type.

  esse método substitui a sintax:
  extends -> implements

  é possivel implementar varios types em uma class.
  */

 type TipoPessoa2 = {
   nome: string,
   sobrenome: string,
   nomeCompleto(): string
  }

  export class Pessoa2 implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }
  }

  const pessoa2 = new Pessoa2('Victor', 'Hugo');
  console.log(pessoa2.nomeCompleto())
