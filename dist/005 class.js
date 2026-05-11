"use strict";
// os generics funcionam da mesma maneira em classes.
// o codigo a seguir usa como exemplo uma estrutura de stack
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = void 0;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Pilha {
    constructor() {
        this.contador = 0;
        this.elementos = {}; // [k:number] expoe que as keys desse objeto vao ser sempre numbers.
    }
    push(elemento) {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        this.contador--;
        const element = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return element;
    }
    isEmpty() {
        return this.contador === 0;
    }
}
exports.Pilha = Pilha;
const stack = new Pilha(); // uso como "parametro" do generic number, o que deixa explicito que a constante stack só recebe nunmbers.
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
