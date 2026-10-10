let entrada = require("prompt-sync")();

let entradaUsuario = entrada("Digite valor de compra: ");

let valorFrete = entradaUsuario > 150 ? 0 : 20;

valorFrete = 0 
? console.log("Frete grátis!") 
: console.log("Valor do frete: R$ " + valorFrete.toFixed(2));