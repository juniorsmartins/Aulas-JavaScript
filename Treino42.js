<!--

/* 
  Curso da Fundação Bradesco
  Aula sobre seleção de múltipla escolha: switch...case
  Entrada de dados: document.form
  Saída de informação: document.form
*/

var js_mes;

function verificar() {
  js_mes = parseInt(document.formCalend.form_mes.value);
  switch (js_mes) {
    case 1 : document.formCalend.form_resultado.value = 'Janeiro'; break;
    case 2 : document.formCalend.form_resultado.value = 'Fevereiro'; break;
    case 3 : document.formCalend.form_resultado.value = 'Março'; break;
    case 4 : document.formCalend.form_resultado.value = 'Abril'; break;
    case 5 : document.formCalend.form_resultado.value = 'Maio'; break;
    case 6 : document.formCalend.form_resultado.value = 'Junho'; break;
    case 7 : document.formCalend.form_resultado.value = 'Julho'; break;
    case 8 : document.formCalend.form_resultado.value = 'Agosto'; break;
    case 9 : document.formCalend.form_resultado.value = 'Setembro'; break;
    case 10: document.formCalend.form_resultado.value = 'Outubro'; break;
    case 11: document.formCalend.form_resultado.value = 'Novembro'; break;
    case 12: document.formCalend.form_resultado.value = 'Dezembro'; break;
    default : document.formCalend.form_resultado.value = 'Dígito Inválido!'; break;
  }
}


-->>