// os generics funcionam da mesma maneira em classes.
// o codigo a seguir usa como exemplo uma estrutura de stack

class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {}; // [k:number] expoe que as keys desse objeto vao ser sempre numbers.

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const element = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return element;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }
}

const stack = new Pilha<number>(); // uso como "parametro" do generic number, o que deixa explicito que a constante stack só recebe nunmbers.
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);
