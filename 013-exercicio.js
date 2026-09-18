let entrada = require('prompt-sync')();

let usuario1 = 'Rodrigo';
let saldo = 1000;
let usuario2 = 'Maria';
let saldo2 = 500;
let usuario3 = 'João';
let saldo3 = 200;

let senha1 = '123456';
let senha2 = '654321';
let senha3 = '987654';

let usOK = false;
let snOK = false;
let acessoPermitido = false;

let valorDisp = 0;

console.log('Insira seus dados para acessar o sistema!');

let loginUsuario = entrada('Nome de usuário: ');
let loginSenha = entrada('Senha: ');

if (loginUsuario === usuario1 && loginSenha === senha1) {
    usOK = true;
    snOK = true;
    valorDisp = saldo;
} else if (loginUsuario === usuario2 && loginSenha === senha2) {
    usOK = true;
    snOK = true;
    valorDisp = saldo2;
} else if (loginUsuario === usuario3 && loginSenha === senha3) {
    usOK = true;
    snOK = true;
    valorDisp = saldo3;
}

if (usOK && snOK) {
    acessoPermitido = true;
}

if (acessoPermitido) {
    console.log('Acesso permitido!');
    console.log(`Seu saldo é: R$ ${valorDisp}`);
} else {
    console.log('Acesso negado!');
}
let valorSaque = parseFloat(entrada('Digite o valor que deseja sacar: '));
if (valorSaque <= valorDisp) {
    valorDisp -= valorSaque;
    console.log(`Saque realizado com sucesso! Seu saldo atual é: R$ ${valorDisp}`);
}
else {
    console.log('Saldo insuficiente para realizar o saque!');
}

entrada('Pressione enter para finalizar o programa!');

