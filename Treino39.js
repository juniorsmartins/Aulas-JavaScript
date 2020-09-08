  /* 
    Fundação Bradesco
    Aula de JavaScript
    Tema: estrutura de decisão
  */

  var num1, num2, num3;
  num1 = parseInt(window.prompt('Olá, Mundo!', 'Digite num um: '));
  num2 = parseInt(window.prompt('Olá, Mundo!', 'Digite num dois: '));
  if (num1 > num2) {
    num3 = num2;
    num2 = num1;
    num1 = num3;
  } 
  document.write('O resultado é: ' + num1 + ' e ' + num2);

