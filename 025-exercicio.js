const entrada = require('prompt-sync')();

let soma = 0;
let nRepeticoes = -1;

do {
    // var permite que  o while enchergue o escopo da variável número mesmo fora do escopo
    var numero = Number(entrada('Digite um número a serem somados: '));
    // mude de var para let e teste o programa
    soma = soma + numero; // soma += numero; 
    nRepeticoes++;
}
while (numero !== 0);

console.log(`Total somado: ${soma}`);
console.log(`Número de repetições: ${nRepeticoes}`);

console.log('');
console.log('pressione ENTER para encerrar o programa!');
