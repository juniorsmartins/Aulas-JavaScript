/* 
  Livro: Lógica de Programação - Crie programas em JavaScript
  Objetivo: calcule o IMC - Índice de Massa Corporal
*/

var altura, peso;

var pulaLinha = function() {
  document.write('<br/><br/>'); // função para pular linha
};

var calculaIMC = function(altura, peso) {
  let imc = (peso / (altura * altura)); // função para calcular o IMC
  return imc;
};

altura = parseFloat(window.prompt('Entrada de dados', 'Qual tua altura? '));
((altura < 1.80) ? (document.write('1 - Baixo!')) : (document.write('1 - Alto!'))); // Operador Ternário
pulaLinha(); // chamada de função para pular linha

peso = parseFloat(window.prompt('Entrada de dados', 'Qual teu peso? '));
((peso < 100) ? (document.write('2 - Abaixo dos 100kg!')) : (document.write('2 - Peso com três dígitos!'))); // Operador Ternário
pulaLinha();

var resposta =  Math.round(calculaIMC(altura, peso)); // chamada de função para calcular o IMC
if (resposta <= 18.5) {
  document.write('3 - Você está magro!');
  pulaLinha();
  document.write('IMC: ' + resposta);
} else if (resposta > 18.5 && resposta <= 35) {
    document.write('4 - Você está no peso ideal!');
    pulaLinha();
    document.write('IMC: ' + resposta);
  } else if (resposta > 35) {
      document.write('5 - Você está com obesidade severa!');
      pulaLinha();
      document.write('IMC: ' + resposta);
    }
