/* 
  Linguagem de Programação JavaScript
  Treino prático para aprendizagem
*/

function pula_Linha()
{
  console.log("\n\n");
}

function entrada_Dados()
{
  let entrada_Armazenada = parseInt(window.prompt("Entrada de Valor", "Digite um número inteiro: "));
  return (entrada_Armazenada);
}

pula_Linha();
console.log("Lista 1 - Exercício 2");
console.log("Faça um programa que leia um valor inteiro qualquer e ao final escreva o dobro do valor lido.");
pula_Linha();
var entrada_Valor1 = entrada_Dados();
var resultado_Final = (entrada_Valor1 * 2);
console.log("O dobro do valor inserido é: " + resultado_Final);
