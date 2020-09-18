pula_Linha();
document.write('*******************************<br/>');
document.write('******* Programa Sorteio! *******<br/>');
document.write('*******************************');

function pula_Linha()
{
  document.write('<br/><br/>');
}

function func_Sorteio()
{
  var sorteado = parseInt(Math.round(Math.random() * 10));
  return sorteado;
}

var num_Sorteado = func_Sorteio();
var num_Chute = parseInt(window.prompt('ENTRADA DE DADOS', 'Chuta qual número? '));

if (num_Chute == num_Sorteado)
{
  pula_Linha();
  document.write('Você acertou!');
}
else
{
  pula_Linha();
  document.write('Você errou!');
}

pula_Linha();
document.write('O número sorteado foi: ' + num_Sorteado);
document.write('<br/>O número chutado foi: ' + num_Chute);
