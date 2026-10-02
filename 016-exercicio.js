let nota1 = 7.5;
let nota2 = 4.0;
let nota3 = 8.0;

if (
    nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10
) {
    console.log("Erro: alguma nota é inválida.");
} else {

    
    let media = (nota1 + nota2 + nota3) / 3;

    console.log("Média: " + media.toFixed(1));

    
    if (media >= 7.0) {
        console.log("Aprovado direto!");
    } else if (media >= 5.0) {
        console.log("Recuperação.");
    } else {
        console.log("Reprovado.");
    }
}
