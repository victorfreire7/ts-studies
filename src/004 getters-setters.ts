/*
  - Comportamento de atributo;
  - sinal de atribuição (=) acessa o SET;
    > pessoa.cpf = '123.456.789-10';
  - acesso ao atributo convoca o GET;
    > console.log(pessoa.cpf);
 ---------------------------------------------------
 - get: utilizado para retorno de um valor
 - set: utilizado para alteração de um valor
 ---------------------------------------------------
 "_cpf":
    > por se comportar como um atributo, o TS retorna o erro 'duplicate';
    isso pode contornado alteração do cpf -> _cpf
*/

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf : string
  ) {}

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Victor', 'Hugo', 17, '000.000.000-00');
pessoa.cpf = '123.456.789-10';
console.log(pessoa.cpf);
