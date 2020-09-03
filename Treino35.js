<!--

/* Fundação Bradesco */
/* Curso de JavaScript */
/* Declaração de variáveis e entrada e saída de dados */

var js_nome, js_sobrenome, js_nomeCompleto;

function concatena() {
  js_nome = document.formConcatena.f_nome.value;
  js_sobrenome = document.formConcatena.f_sobrenome.value;
  js_nomeCompleto = js_nome + ' ' + js_sobrenome;
  window.alert('Olá, ' + js_nomeCompleto + '. Seja Bem-vindo!');
}

//-->