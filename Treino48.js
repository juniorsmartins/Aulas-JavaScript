<!--
/* 
  Livro: Lógica de Programação - Crie programas em JavaScript
  Objetivo: calcule o IMC - Índice de Massa Corporal
*/

var pulaLinha = function() {
  document.write('<br/><br/>'); // função para pular linha
};

var calculaIMC = function(a, p) {
  var imc = ((a * a) / p); // função para calcular o IMC
  return imc;
};

var altura = parseInt(window.prompt('Qual tua altura? '));
((altura < 1.80) ? (document.write('Baixo!')) : (document.write('Alto!'))); // Operador Ternário
pulaLinha(); // chamada de função para pular linha

var peso = parseInt(window.prompt('Qual teu peso? '));
((peso < 100) ? (document.write('Abaixo dos 100kg!')) : (document.write('Peso com três dígitos!'))); // Operador Ternário
pulaLinha();

var resposta = calculaIMC(altura, peso); // chamada de função para calcular o IMC
if (resposta <= 18.5) {
  document.write('Você está magro!');
  pulaLinha();
} else { 
    if (resposta > 18.5 && resposta <= 35) {
      document.write('Você está no peso ideal!');
      pulaLinha();
    } 
} else {
    if (resposta > 35) {
      document.write('Você está com obesidade severa!');
      pulaLinha();
    }
}




//-->