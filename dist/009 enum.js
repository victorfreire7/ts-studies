"use strict";
// ENUM is a feature that allows you to define
//  a set of namede, constant values,
// which can be either numeric os string-based
// estrutura de dados nao ordenada
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["yellow"] = 2] = "yellow";
})(Colors || (Colors = {}));
console.log(Colors);
console.log(Colors.red); // é retornado '0', como se fosse o código do valor. os valores podem ser alterados
console.log(Colors[0]);
console.log('----------------------------------------');
var Colors2;
(function (Colors2) {
    Colors2[Colors2["red"] = 10] = "red";
    Colors2[Colors2["blue"] = 100] = "blue";
    Colors2[Colors2["yellow"] = 200] = "yellow";
})(Colors2 || (Colors2 = {}));
console.log(Colors2);
console.log(Colors2.red); // é retornado '0', como se fosse o código do valor. os valores podem ser alterados
console.log(Colors2[10]);
console.log('----------------------------------------');
//conseguimos tambem unir dois enum
(function (Colors2) {
    Colors2["purple"] = "PURPLE";
    Colors2["green"] = "GREEN";
})(Colors2 || (Colors2 = {}));
console.log(Colors2);
console.log('----------------------------------------');
// pode ser usado como um type.
function selectColor(color) {
    console.log(Colors[color]);
}
selectColor(Colors.blue);
