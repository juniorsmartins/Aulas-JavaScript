/* Aula de JavaScript - Prática */
/* Desafio Ninja */

var myvar;
myvar = 10;
var soma;
soma = 15 + 8;
soma++;
soma*=3;
document.write("Qual é o valor da variável soma? " + soma);
var souninja = true;
var comida = ["arroz", "feijão", "ovo"];
document.write("<br/><br/>O valor de comida[1] é: ", comida[1]);

if (soma === myvar) {
  document.white("<br/><br/>A variável soma é igual myvar até no tipo");
} else if (myvar <= soma) {
  document.write("<br/><br/>A variável myvar é menor ou igual soma");
} 


function divisao(x, y) {
  let div2;
  div2 = x / y;
  return(div2);
}

var resultado;
resultado = divisao(22, 2);
document.write("<br/><br/>O resultado é: " + resultado);
