/* 
  Linguagem de Programação JavaScript
  Treino prático para aprendizagem
*/

function pula_Linha()
{
  console.log(" ");
  console.log(" ");
}

pula_Linha();
console.log("Faça um programa que leia dois valores inteiro e apresente-os depois de digitados.");
pula_Linha();

var valor_Primeiro = parseInt(window.prompt('Entrada', 'Qual o primeiro valor? '));
var valor_Segundo = parseInt(window.prompt('Entrada', 'Qual o segundo valor? '));

console.log("Os valores digitados foram: ", valor_Primeiro + " e " + valor_Segundo);
