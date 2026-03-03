export class Calculator {
  constructor(public number: number){}

  // retorno o this de dentro da class (a própria instancia "Calculator"). permite execuçao de metodos em cadeira
  add(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

const calculator = new Calculator(10); // adiciono 10 como numero inicial
calculator.add(5).mul(2); // <--- execução de métodos em cadeia
/*
  essa utilizaçao acontece pois quando retornamso 'this' dentro das funções, toda a class é retornado.
  a saidea desse exxemplo criado é:
    Calculator { number: 30 }
*/


console.log(calculator);


// GoF - Builder method
// exemplo de um requestBuilder:

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('https://www.google.com').setMethod('post').send(); // execução de metodos em cadeia
