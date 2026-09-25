let entrada = require('prompt-sync')();

let strNum1 = entrada('Digite um número: ');

if (strNum1 % 2 == 0){  
    
    console.log('Esse número é par')
}
else{
    console.log('Esse número é ímpar')
}

if (strNum1 >= 0 ){
    console.log('Esse número é positivo')
}
else if (strNum1 < 0){
    console.log('Esse número é negativo')
}









