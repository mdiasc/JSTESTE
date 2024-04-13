var bVendidos=parseInt(prompt("Quanto ele ganha por brinquedo vendido?"));

var brinquedos=parseInt(prompt("Quantos brinquedos ele vendeu?"));

var calculo1=(brinquedos * bVendidos);

var salarioFixo=parseFloat(prompt("Qual salário fixo do funcionário?"));

var salarioFinal=(calculo1 + 5% + salarioFixo);
22022
alert("O salário final do funcionário é:"+ salarioFinal + "R$");