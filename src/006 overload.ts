// baseado nos parametros que minha função receber
// eu consigo fazer ela se comportar de maneira diferente;
// funciona no campo 'type'.
// exemplo:

type Adder = {
  (x: number): number; // em um momento eu posso receber apenas x
  (x: number, y:number): number; // em outro momento, x e y
  (...args: number[]): number; // em outro momento, varios numeros
}

const adder: Adder = (x:number, y?:number, ...args:number[]) => {
  if(args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0); // caso os parametros cheguem no array de numeros (args), todos indices vao ser somados + o x enviado + o y enviado
  return x + (y || 0); // o typeguard é feito no Y pois nao tem nada garantindo que ele seja enviado...
}
