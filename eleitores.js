var totalEleitores=parseInt(prompt("Digite o total de eleitores"));

var votosBrancos=parseInt(prompt("digite o total de votos brancos"));

var votosNulos=parseInt(prompt("Digite o total de votos nulos"));

var votsValidos=parseInt(prompt("digite o totl de votos validos"));

var percentualValido=(totalEleitores / votsValidos * 100);

var percentualBranco=(totalEleitores / votosBrancos * 100);

var percentualNulos=(totalEleitores / votosNulos * 100);

alert("A porcentagem de votos brancos é:" + percentualBranco);
alert(" Percentual de votos nulos é "+ percentualNulos);
alert("percentual de votos validos é " + percentualValido);