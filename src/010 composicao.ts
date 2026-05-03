/*
  - O tipo de relação de composição é utilizado quando uma class nao existe sem a outra.
  O exemplo abaixo mostra um carro de um motor como analogia a esse tipo de associação
  - Nesta relação, geralmente uma class é instancioada dentro da "pai".

  !!!
  instanciar uma class 'filho' de fora da 'pai', por mais que possivel, é uma má pratica;
  solução: criar funções dentro do pai como visualizaçao/execução
  !!!
  visualizaçao do diagrama em docs/'008 associacao.png'
*/

export class Carro{
  private readonly motor: Motor = new Motor();

  public ligar(): void {
    this.motor.ligar();
  }

  public desligar(): void {
    this.motor.desligar();
  }
}

export class Motor{
  public ligar(): void {
    console.log('Motor está ligando...')
  }
  
  public desligar(): void {
    console.log('Motor está desligando...')
  }
}

const carro = new Carro();
carro.ligar()
carro.desligar()
