let entrada = require('prompt-sync')();

//vamos calcular
let strNum1 = entrada('Insira o 1ª valor: ');
let strNum2 = entrada('Insira o 2ª valor: ');

let num1 = parseInt(strNum1);
let num2 = parseInt(strNum2);

let soma = num1 = num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

console.log(`Soma: ${num1} + ${num2} = ${soma}`);