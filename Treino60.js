/* 
  Linguagem de Programação JavaScript
  Treino prático para aprendizagem
*/

console.log(" ");
console.log("Faça um programa que leia um valor inteiro, calcule e escreva o resto inteiro da divisão desse valor por três.");
console.log("E diga se o valor digitado é maior ou menor do que 50.");
console.log(" ");

var valor_Inteiro = parseInt(window.prompt('Entrada', 'Digite um valor inteiro: '));
var resultado_Resto = (valor_Inteiro % 3);

console.log(`O resto de ${valor_Inteiro} dividido por três é: ${resultado_Resto}`);

if (valor_Inteiro < 50)
{
  console.log("O valor digitado é menor do que 50!");
}
else if (valor_Inteiro > 50)
{
  console.log("O valor digitado é maior do que 50!");
}
else if (valor_Inteiro = 50)
{
  console.log("O valor digitado é igual a 50!");
}