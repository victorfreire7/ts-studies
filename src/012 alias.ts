// cria uma 'variavel' para tipos

type Idade = number;
type Rgb = "vermelho" | "verde" | "azul";
type Cmyk = "ciano" | "magente" | "amarelo" | "preto";
type AllColors = Rgb | Cmyk;

type Pessoa = {
  // nao estou criando um objeto, mas sim um tipo de objeto que pode ser usado posteriormente
  nome: string;
  idade: Idade; // o tipo criado antes
  salario: number;
  corPreferida?: AllColors;
};

// agora, ao criar um novo objeto com o type 'Pessoa'
// todas atribuiçoes devem ser seguidas.

// semelhante a um extends (?)

const pessoa: Pessoa = {
  idade: 18,
  nome: "Victor",
  salario: 20000,
};

function setCorPreferida(pessoa: Pessoa, cor: AllColors): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'amarelo'));
console.log(pessoa);
