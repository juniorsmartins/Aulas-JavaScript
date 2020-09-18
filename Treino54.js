var numero_Aleatorio = Math.round(Math.random() * 100);
var chute_Usuario = parseInt(window.prompt('Entrada de dados', 'Tente acertar o número sorteado de 1 a 100?'));

var pula_Linha = function()
{
  document.write('<br/>');
}

document.write('Programa - Acerte o número sorteado (1 a 100) <br/>');

if (chute_Usuario == numero_Aleatorio)
{
  window.alert('Você acertou!');
  pula_Linha();
  document.write('O número sorteado é: ' + numero_Aleatorio);
  pula_Linha();
  document.write('O número chutado é: ' + chute_Usuario);
}
else
{
  window.alert('Você errou!');
  pula_Linha();
  document.write('O número sorteado é: ' + numero_Aleatorio);
  pula_Linha();
  document.write('O número chutado é: ' + chute_Usuario);
}