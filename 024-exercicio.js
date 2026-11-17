const entrada = require('prompt-sync')();

let contador = 5;

console.log('Iniciando contagem regressiva para decolagem:');

for (let n = contador; n >= 0; n--) {
    console.log(n);
}

console.log('Decolagem autorizada!');

entrada("Pressione ENTER para encerrar o programa!");