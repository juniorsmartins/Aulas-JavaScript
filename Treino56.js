var data_Atual = 0;
var data_Copa = 0;

function pula_Linha()
{
  document.write('<br/><br/>');
}

function mostra(let frase)
{
  document.write(frase + '<br/>');
}

function primeiro_Evento()
{
  let ano_Evento = parseInt(window.prompt('Entrada de Dados', 'Qual o ano da 1ª Copa do Mundo? '));
  return (ano_Evento);
}

pula_Linha();
mostra('**********************');
mostra('****** Aula de Js ******');
mostra('**********************');
pula_Linha();
data_Copa = primeiro_Evento();
mostra('A 1ª Copa do Mundo foi em: ' + data_Copa);

do
{
  data_Atual = (data_Copa + 4);
  mostra('Haverá Copa do Mundo em: ' + data_Atual);
} while (data_Atual <= 2030);

