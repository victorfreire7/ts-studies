// Never:
// quando uma funçao nao retorna. MEsma funçao do Void
// geralmente usada pra criação de erros.

export function newErro(): never {
  throw new Error('Random Error');
}

newErro();
