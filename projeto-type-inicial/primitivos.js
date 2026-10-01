"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let isActive = true;
let age = 19;
let price = 13.90;
let product = "pastel";
let phrase = `Olá, o valor do produto ${product} é R$ ${price}.`;
console.log(phrase);
// Funções
// Função básica, string retorna string
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Ana"));
// Função level 2, dois parametros, um retorno
function currencyFormatter(value, currency = "R$") {
    return `${currency} ${value.toFixed(2)}`;
}
console.log(currencyFormatter(199.90));
console.log(currencyFormatter(199.90, "US$"));
function updateStatus(status) {
    console.log(`New status: ${status}.`);
}
updateStatus("paid");
// Função level 4, o parâmetro poder múltiplos tipos, e a função deve prever isto
function calcLength(input) {
    if (typeof input === "string") {
        return input.length;
    }
    return input.toString().length;
}
console.log(calcLength("Lisiane-san"));
//# sourceMappingURL=primitivos.js.map