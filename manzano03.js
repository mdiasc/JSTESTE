let nota1=parseFloat(prompt("Digite a 1°nota"));

let nota2=parseFloat(prompt("digite a nota numero 2"));

let nota3=parseFloat(prompt("digite a nota numero 3"));

let nota4=parseFloat(prompt("digite a 4° nota"));

let notaMedia= (nota1+nota2+nota3+nota4) / 4

if(notaMedia >= 5){
    alert(`o aluno foi aprovado  ${notaMedia}`)
} else{
    alert(` o aluno foi reprovado ${notaMedia}`);
}