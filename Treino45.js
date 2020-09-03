<!--
/*
  Fundação Bradesco
  Curso: JavaScript
  Tema: repetição condicional
*/
// Declaração de variáveis
var js_usuario;
var js_resp = true;

// função pula linha
function pulaLinha () {
  document.write('<br/>');
};

do {
  js_usuario = window.prompt('IHC', 'Continuar (s ou n)?');
  document.write('Repete!');
  pulaLinha();
} while (js_usuario == 's');

while (js_resp == true) {
  document.write('Mais Repetição!');
  pulaLinha();
  js_resp = window.confirm('Deseja continuar?');
}



-->