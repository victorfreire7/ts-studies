/*
  Atributos:
    - public: acessivel de todas as maneiras/instancias; dentro de fora da Class.
    - private: encapsulamento. atributo que restringe a acessibilidade apenas para dentro da Class.
    - protected: permite acesso a chave dentro de sua classe e sub-classes.
    - readonly: Atributo que permite apenas a leitura de um dado; nao alterações.

  - Semelhtante a Class no JS;
  - funciona também como Type;
  - Definição e depois Constructor;
  - Podemos também definir dentro do constructor.
*/

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaborador(): void {
    for(var colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Victor', 'Hugo');
empresa1.addColaborador(colaborador1);
empresa1.mostrarColaborador();
console.log(empresa1);
