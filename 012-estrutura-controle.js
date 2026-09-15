let entrada = require('prompt-sync')();

let usuario ='klofis';
let senha = '1475369';
let usOK = false;
let snOK = false;
let acessoPermitido = false;

console.log('Insira seus dados para acessar o sistema!');

let loginUsuario = entrada('Nome de usuário: ');
let loginSenha = entrada('Senha: ');

if (usuario == loginUsuario.toLowerCase()) {
    console.log('Nome de usuário verificado com sucesso!');
    usOK == true;
}

if (senha == loginSenha) {
    console.log('Senha verificada com sucesso!');
    snOK == true;
}

if (usOK === true) {
    if (snOK === true) {
        acessoPermitido == true;
    }
}

if (acessoPermitido === true) {
    console.log('Acesso permitido!');
} else {
    console.log('Acesso negado!');
}


entrada('Pressione enter para finalizar o programa!');
