/*
  assim como o type alias, as interfaces sao feitas para moldar objetos e criar 'contratos'. Porém, a interface estta mais presente na P.O.O e é feita exclusivamente para classes e objetos; enquanto o type alias abrange mais alternativas e tem menos restrições.
*/

export interface TipoPessoa {
  nome: string,
  sobrenome: string,
  nomeCompleto(): string
}

export class Pessoa2 implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

  const pessoa2 = new Pessoa2('Victor', 'Hugo');
  console.log(pessoa2.nomeCompleto())
