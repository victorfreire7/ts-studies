// variavel do type 'any'.
// permite a mudança de types de uma variavel
// desde de que uma validação de tipo seja feita antes.

let x: unknown;

x = 100;
x = 'Victor'

if(typeof x === 'number') console.log(x + 500)

  // caso a validação nao tenha sido feita, seria lançado um Erro na concatenação.
  // como ela foi feita, nada foi retornado.
