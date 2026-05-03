"use strict";
var _a, _b;
const documento = {
    titulo: 'O título',
    texto: 'O texto',
    data: new Date()
};
console.log((_b = (_a = documento.data) === null || _a === void 0 ? void 0 : _a.toDateString()) !== null && _b !== void 0 ? _b : 'Informação undefined');
