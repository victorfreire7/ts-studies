interface PessoaProtocoloPadra<T = string, U = number> { // podemos pré-definir um type dentro dos generics
  nome: T,
  sobrenome: T,
  idade: U
}

interface PessoaProtocolo<T, U> {
  nome: T,
  sobrenome: T,
  idade: U
}

const cli1: PessoaProtocolo<string, number> = { // Quando utilizo os generics, o tipo inferido funciona como o parametro de uma função
  nome: 'victor',
  sobrenome: 'hugo',
  idade: 18
}

const cli2: PessoaProtocolo<number, boolean> = { // Quando utilizo os generics, o tipo inferido funciona como o parametro de uma função
  nome: 123,
  sobrenome: 456,
  idade: true
}

console.log(cli1);
console.log(cli2);
