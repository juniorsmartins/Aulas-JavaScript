<!--
/*
  Fundação Bradesco
  Curso: JavaScript
  Tema: laços ou loops - while, do...while e for
*/

// Função para pular linha
function pulaLinha() {
  document.write('<br/>');
}

// Declaração de Variáveis
var contador = 1;

// Saída de Informação
document.write('Exercício!<br/>');
pulaLinha();

// Inicio do Laço de Repetição Condicional While
while (contador <= 5) {
  document.write('O contador vale: ' + contador);
  pulaLinha();
  contador++;
}
// Fim do laço de repetição condicional While

pulaLinha();

// Inicio do Laço de Repetição Condicional Do-While
do {
  document.write('O contador vale: ' + contador);
  pulaLinha();
  contador++;
} while (contador <= 10);
// Fim do laço de repetição condicional Do-While

-->