"use strict";
/*
  Tipo d realaçao de duas classes aonde ambos objetos funcionam separadamente mesmo sedno
  feitos para estar unidos.
  Exemplo: Carrinho e Produtos

  - Tipo de associaçao
  - ligação mais forte
  - 1 para vários

  visualizaçao do diagrama em docs/'008 associacao.png'
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = exports.Carrinho = void 0;
var Carrinho = /** @class */ (function () {
    function Carrinho() {
        this.produtos = [];
    }
    Carrinho.prototype.inserirProdutos = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        for (var i = 0; i < arg.length; i++) {
            this.produtos.push(arg[i]);
        }
    };
    Carrinho.prototype.quantidade = function () {
        return this.produtos.length;
    };
    Carrinho.prototype.total = function () {
        var count = 0;
        for (var i = 0; i < this.produtos.length; i++) {
            count = count + this.produtos[i].preco;
        }
        return count;
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
var Produtos = /** @class */ (function () {
    function Produtos(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Produtos;
}());
exports.Produtos = Produtos;
var carrinho = new Carrinho();
var produto1 = new Produtos('Camisa', 50);
var produto2 = new Produtos('Camisa Polo', 150);
var produto3 = new Produtos('Tênis', 350);
carrinho.inserirProdutos(produto1, produto2, produto3);
console.log(carrinho);
console.log(carrinho.quantidade());
console.log(carrinho.total());
