/*
  Outra maneira muito comumente usada  de type-guards é utilizando swich,
  e adicionando um novo campo 'tipo' no que vai ser filtrado, como no exemplo abaixo:
*/

type Pessoa = { tipo: 'pessoa', nome: string }
type Animal = { tipo: 'animal', cor: string }
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor( public nome: string ) {}
}

function mostrarNome(obj: PessoaOuAnimal): void {
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('A cor do seu animal é ' + obj.cor);
      return;
  }
}

mostrarNome(new Aluno('Victor'))
mostrarNome({tipo: 'animal', cor: 'azul'});
