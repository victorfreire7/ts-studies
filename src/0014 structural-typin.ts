// comportamento exclusivo do typescript
// a identidade do tipo nao importa, somente as restriçoes que fazem parte
/*
  Imagine que você tem uma classe chamada Casa, todas as instâncias da classe Casa são do
  tipo Casa (o tipo da classe). Essa é a identidade do tipo. Linguagens de tipagem mais
  restrita não aceitam nada a não ser o tipo Casa. O TS não liga com essa identidade,
  ele só liga se o elemento cumpre todos os parâmetros para ser uma casa,

  Em resumo, se duas classes tem os mesmos métodos e atributos, tipo Casa e Abrigo (duas
  classes com atributos idênticos) o TS aceitaria um no lugar do outro.
*/

// exemplo:

// pense no cenario de uma verificação de usuario.
// sentValue seria o valor resgatado dentro de uma BD,
//  user o que foi enviado

type User = {username: string, password: string};
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

/*
  quando atribuimos à uma váriavel uma classe, apenas os valores da classe sao atribuidos,
  nao a o valor 'classe' em si; tanto que aqui, podemos adicionar um novo valor a ser
  atribuido, mesmo essa variavel nao estando presente na classe em si
*/

const bdUser = { username: 'victor', password: '123456' };
const sentUser = { username: 'victor', password: '123456', confirmPass: false };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
