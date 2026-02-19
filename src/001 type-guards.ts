/*
  type-Guard é a ação de previnir que uma função que pode receber dois types
  cumpra sua função incorretamente de acordo com o type que foi inserido.
*/

type Pessoa = { nome: string }
type Animal = { cor: string }
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor( public nome: string ) {}
}

function mostrarNome(obj: PessoaOuAnimal): void {
  // if('nome' in obj) console.log(obj.nome) // Type Guard
  if (obj instanceof Aluno) console.log(obj.nome)
}
mostrarNome(new Aluno('Victor'))


/*
  'nome' in obj:

  controle de fluxo que verifica se o valor 'nome' é constado no parametro enviado.

  instanceof:

  sintax js native, confirma se o primeiro parametro enviado
  consta com todos valores solicitador pela instancia
  do segundo parametro.

*/

