let entrada = require('prompt-sync')();
let idade = parseInt(entrada("Digite a idade: "));
let acompanhado = entrada("Está acompanhado? (s/n): ") === "s";
let bloqueado = entrada("Está bloqueado? (s/n): ") === "s";


if (bloqueado) {
    console.log("Acesso Bloqueado");
} else if (idade >= 18 || acompanhado) {
    console.log("Acesso Liberado");
} else {
    console.log("Acesso Negado");
}
