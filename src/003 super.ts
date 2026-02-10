// super-classe se referem a Classes que sao extendidas;
// as classes que recebem a extensão, sub-classes

// quando estamos dentro de um método de uma Sub-Class que se diz respeito a super;
// muitas vezes precisamos alterar o método e também utilizar ele originalmente.
// podemos instanciar o método da super class usando o atribuido 'super.<methodHere>' anteriormente.
// exemplo em 'class Alunos extends Pessoa'.

// constructor em Sub-Class:
// caso queiramos adicionar uma nova chave em uma Sub Class, é necessario chamar novametne todas
// as chaves da super class sem passar seus atributos (public, private, protected, [...]).
// O que sera criado recebera atributos.
// exemplo em 'class Alunos extends Pessoa'.

export class Pessoa { // Super Class
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
};

export class Aluno extends Pessoa { // Sub Class
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf); // fazendo isso, passamos novamente todos os valores que foram enviado a Aluno para a Super-Class, sem alterar no Super-Constructor.
    this.sala = sala;
  }

  public getNomeCompleto(): string {
    console.log('return before');
    return 'super.getNomeCompleto() = )' + super.getNomeCompleto();
  }
};

export class Cliente extends Pessoa { // Sub Class
  public getNomeCompleto(): string {
    return `Polimorfismo no Cliente = ) ${this.nome} ${this.sobrenome}`;
  }
};

const pessoa = new Pessoa('Victor', 'Hugo', 17, '000.000.000-00');
const aluno = new Aluno('Victor', 'Hugo', 17, '000.000.000-00', 'A003');
const cliente = new Cliente('Victor', 'Hugo', 17, '000.000.000-00');

console.log(pessoa)
console.log(aluno)
console.log(cliente)

console.log('---------------------')

console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())
