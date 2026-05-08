// podemos restringir um generic há uma única funcionalidade.
// o exemplo abaixo cria uma função que recebe um objeto e uma chave, e retorna o valor dentro da chave.

// essa restrinção só funciona quando o generic é inferido antes dos parametros.
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['vacina1', 'vacina2'],
  idade: 10
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
console.log('----------------------------------------------------')
console.log(animal["vacinas"], animal["cor"], animal["idade"]);
