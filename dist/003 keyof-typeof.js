"use strict";
/* CoresObj:
  typeof CoresObj = {
    vermelho: string;
    verde: string;
    azul: string;
  }
*/
/* CoresChaves:
  keyof CoresChaves = "vermelho" | "verde" | "azul"
*/
const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
};
function traduzirCor(cor, cores) {
    return cores[cor];
}
console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('azul', coresObj));
// KEYOF DOCUMENTATION:  https://typescript.treinaweb.com.br/docs/handbook/2/keyof-types.html
// TYPEOF DOCUMENTATION:  https://typescript.treinaweb.com.br/docs/handbook/2/typeof-types.html
