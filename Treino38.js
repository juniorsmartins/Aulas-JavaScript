<!--

/* 
  Fundação Bradesco - Curso de JavaScript

  Desenvolver um programa em JavaScript que 
  faça a leitura de dois números inteiros e 
  apresente o resultado da soma entre eles.
*/

function pulaLinha(){
  document.write('<br/><br/>');
}

var valor_1;
var valor_2;
var soma_valor;

document.write('Aula de JavaScript!');
pulaLinha();

valor_1 = window.prompt('ENTRADA DE DADOS', 'Qual valor um?');
valor_2 = window.prompt('ENTRADA DE DADOS', 'Qual valor dois?');
soma_valor = parseInt(valor_1) + parseInt(valor_2);

window.alert('A soma dos valores é: ' + soma_valor.toString());
pulaLinha();

var valor_3;
var valor_4;

function mostra() {
  valor_3 = document.formEntraDados.f_valor1.value;
  valor_4 = document.formEntraDados.f_valor2.value;
  var soma2_valor = parseInt(valor_3) + parseInt(valor_4);
  document.write('O resultado da soma e: ' + soma2_valor);

}





//-->