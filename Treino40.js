<!--

/* 
  Fundação Bradesco - Curso de JavaScript

  Aula sobre Switch...Case

*/

// Declaração de variáveis
var js_mes;
var js_resultado


// Função para calcular o mês
function calcular() {

  // Entrada de dados por formulário
  js_mes = parseInt(document.formEntrada.f_mes.value);

  // Estrutura de Múltipla Escolha - Swicth com saída de dados
  switch (js_mes) {
    case 1 : document.formEntrada.f_resultado.value = 'janeiro'; break;
    case 2 : document.formEntrada.f_resultado.value = 'fevereiro'; break;
    case 3 : document.formEntrada.f_resultado.value = 'março'; break;
    case 4 : document.formEntrada.f_resultado.value = 'abril'; break;
    case 5 : document.formEntrada.f_resultado.value = 'maio'; break;
    case 6 : document.formEntrada.f_resultado.value = 'junho'; break;
    case 7 : document.formEntrada.f_resultado.value = 'julho'; break;
    case 8 : document.formEntrada.f_resultado.value = 'agosto'; break;
    case 9 : document.formEntrada.f_resultado.value = 'setembro'; break;
    case 10 : document.formEntrada.f_resultado.value = 'outubro'; break;
    case 11 : document.formEntrada.f_resultado.value = 'novembro'; break;
    case 12 : document.formEntrada.f_resultado.value = 'dezembro'; break;
    default: document.formEntrada.f_resultado.value = 'Número Inválido!'; break;
  } // final da estrutura do Swicht
} // final da estrutura da Função


//-->