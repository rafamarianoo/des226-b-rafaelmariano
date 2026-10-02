let entrada = require('prompt-sync')();

let strNum1 = entrada('Digite um número: ');
let num1 = parseInt(strNum1);

if (num1 % 2 == 0){  
    
    console.log('Esse número é par')
}
else{
    console.log('Esse número é ímpar')
}

if (num1 >= 0 ){
    console.log('Esse número é positivo')
}
else if (num1 < 0){
    console.log('Esse número é negativo')
}














