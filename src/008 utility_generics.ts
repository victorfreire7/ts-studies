// Existem genéricos padrões, já criados e disponibilizados elo typescript
// Alguns deles são:

// Record: Segue o padrão dos paramêtros de chave e valor de um objeto. Nessa respectiva ordem.
const obj1: Record<string, string | number> = {
  nome: "victor",
  sobrenome: "freire",
  idade: 18
};

console.log(obj1);

// Required: Dentro de um objeto, transformo tudo o que é opcional em obrigatório
type PessoaProtocol = {
  nome: string,
  sobrenome?: string,
  idade: number,
};

const obj2: Required<PessoaProtocol> = {
  nome: "victor",
  sobrenome: "freire",
  idade: 18
};

console.log(obj2);

// Partial: Retorna tudo o que era requirido, não obrigatório

const obj3: Partial<PessoaProtocol> = {
  nome: "victor",
};

// Readonly

const obj4: Readonly<PessoaProtocol> = {
  nome: "victor",
  sobrenome: "freire",
  idade: 18
};

// Pick: Retorna apenas os paramêtros que são solicitados

type PickPessoa = Pick<PessoaProtocol, 'nome' | 'idade'>;

const obj5: PickPessoa = {
  nome: 'victor',
  idade: 18
}

console.log(obj5);

// EXCLUDE & EXTRACT

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type excludeABC = Exclude<ABC, CDE>; // Guarda os tipos que estão em ABC e NÃO estão em CDE;
type extractCDE = Extract<ABC, CDE>; // Faz o contrario de Exclude: Retorna a chave presente nos dois tipos 
