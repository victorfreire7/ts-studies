// STATIC é uma utilidade POO do TS que permite o acesso a uma chave ou método
// de uma class sem a instância da mesma.

export class Pessoa {
  static cpfPadrao: string = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, this.cpfPadrao);
  }
}

const pessoa = Pessoa.criaPessoa('Victor', 'Hugo');
console.log('CPF Padrão: ' + Pessoa.cpfPadrao);
console.log(pessoa);

// Pessoa {
//   nome: 'Victor',
//   sobrenome: 'Hugo',
//   idade: 0,
//   cpf: '000.000.000-00'
// }
