alert("Vamos identificar quais valores são maiores ou menores");
var valor1=parseInt(prompt("Digite um valor"));

var valor2=parseInt(prompt("Digite outro valor"));

var diferenca=(valor1 - valor2);

if (valor1 > valor2){
    diferenca= valor1 - valor2
}

alert(`a diferença dos valores é: ${diferenca}`);