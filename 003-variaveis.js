let entrada = require("prompt-sync")();
// comentário de 1 linha
let nome = "Rafa"; // string ex: 'qualquer texto'
let idade = 26; // number ex: 10, 18.23
let trabalha = true; // boolean ex: true, false
let endereço = {
  rua: "Brasil",
  num: 40,
  bairro: "centro",
}; // object ex: padrão chave/valor
let funcao = () => console.log("oi"); // function ex: bloco de código

/*
comentário
de mais de 
uma linha
*/

console.log("tipos de variaveis");
console.log("variavel: nome: " + typeof (nome));
console.log("variavel: idade: " + typeof (idade));
console.log("variavel: trabalha: " + typeof (trabalha));
console.log("variavel: endereço: " + typeof (endereço));
console.log("variavel: funcao: " + typeof (funcao));

// variaveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

console.log() //pula uma linha

// passando valor para as variáveis 
nomeDigitado = entrada('Digite seu nome: ');
idadeDigitada = entrada('Qual sua idade? ');
trabalhaDigitado = entrada('Você trabalha? ');

// mostrando valor e tipo das variáveis
console.log('nome: ' + nomeDigitado + 'tipo: ' + typeof (nomeDigitado));
console.log('idade: ' + idadeDigitada + 'tipo: ' + typeof (idadeDigitada));
console.log('trabalha: ' + trabalhaDigitado + 'tipo: ' + typeof (trabalhaDigitado));

let conteudoDigitado = entrada("Digite uma frase: ");

console.log(conteudoDigitado);
