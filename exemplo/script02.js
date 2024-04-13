/*
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
*/

let contadora = 1
let numero
let resultado

numero = parseInt(prompt("Digite um valor: "))

while (contadora < 11) {
  resultado = numero * contadora

  console.log (`${numero} * ${contadora} = ${resultado}`)
    contadora++
}