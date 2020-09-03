<!--
/*
  Fundação Bradesco
  Curso: JavaScript
  Tema: Laço Incondicional For
*/

function pulaLinha() {
  document.write('<br/>');
}

for (var js_cont = 0; js_cont <= 10; js_cont+=2) {
  document.write('Contador = ' + js_cont);
  pulaLinha();
}

for (var js_cont2 = 15; js_cont2 >= 10; js_cont2--) {
  document.write('contador invertido: ' + js_cont2);
  pulaLinha();
  for (var js_cont3 = 1; js_cont3 <= 2; js_cont3++) {
    document.write('contador terceiro: ' + js_cont3);
    pulaLinha();
  }
}

-->