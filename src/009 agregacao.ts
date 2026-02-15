/*
  Tipo d realaçao de duas classes aonde ambos objetos funcionam separadamente mesmo sedno
  feitos para estar unidos.
  Exemplo: Carrinho e Produtos

  - Tipo de associaçao
  - ligação mais forte
  - 1 para vários

  visualizaçao do diagrama em docs/'008 associacao.png'
*/


export class Carrinho{
  private readonly produtos: Array<Produtos> = [];

  inserirProdutos(... arg: Array<Produtos>): void {
    for(var i = 0; i < arg.length; i++){
      this.produtos.push(arg[i]);
    }
  }

  quantidade(): number {
    return this.produtos.length;
  }

  total(): number {
    var count: number = 0;
    for(var i = 0; i < this.produtos.length; i++){
      count = count + this.produtos[i].preco
    }
    return count;
  }
}


export class Produtos{
  constructor(
    public nome: string,
    public preco: number
  ){}
}

const carrinho = new Carrinho();

const produto1 = new Produtos('Camisa', 50);
const produto2 = new Produtos('Camisa Polo', 150);
const produto3 = new Produtos('Tênis', 350);

carrinho.inserirProdutos(produto1, produto2, produto3);

console.log(carrinho);
console.log(carrinho.quantidade());
console.log(carrinho.total());
