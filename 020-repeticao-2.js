

// let contador = 0;

// while (contador <= 50) {
//     console.log(contador);
//     contador = contador + 1;
// }

let i = 1;

console.log("Iniciando contagem na mesma linha...\n");
// limpa a linha atual do terminal e move o cursor para o início da linha
const intervalo = setInterval(() => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
// escreve o numero atual na mesma linha
    process.stdout.write(`Contagem: ${i}`);

    if (i === 10) {
        clearInterval(intervalo); // para o contador quando chegar a 10
        console.log("n\n\ Fim da contagem");
    }

    i++;
}, 3000); // 3000 milissegundos = 3 segundos


