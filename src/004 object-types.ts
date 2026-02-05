// permitindo que uma nova chave seja adicionada a um objeto ja existente
// podemos usar a tag 'readonly' quando nao queremos que um valor seja alterado dentro de uma chave
// Problema:

  const objetoA = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
  };

  objetoA.chaveA // Acessivel
  // objetoA.chaveC // Impossivel criar nova chave

// ------------------------------------------------

// Solução (index signature):

// 1.
  const objetoB: Record<string, unknown> = { // Record<string, unknown> permite que eu crie novos valores de fora do objto
    chaveA: 'Valor A',
    chaveB: 'Valor B',
  }

  objetoB.chaveC = 'Nova chave';
  console.log('ObjetoB: ');
  console.log(objetoB);

// 2.
  const objetoC: {
    readonly chaveA: string;
    readonly chaveB: string;
    chaveC?: string; // ?: faz com que uma chave nao tenha um valor obrigatoriamente
    [key: string]: unknown; // forma paralela de utilizar a resolução anterior. // tambem podemos usar any
  } = {
    chaveA: 'Valor A',
    chaveB: 'Valor B'
  };

  objetoC.chaveZ = 'Nova chave';

  console.log('ObjetoC: ');
  console.log(objetoC);


