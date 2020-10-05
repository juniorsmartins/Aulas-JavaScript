var notas_Quantia = Number.parseInt(window.frames.prompt('Quer calcular quantas médias? '), 10);
var nota = [], soma = 0, media = 0;
for (let contador = 0; contador <= (notas_Quantia - 1); contador+=1)
{
  nota[contador] = Number.parseFloat(window.frames.prompt('Nota ' + contador + ": "));
  soma += nota[contador];
};
media = (soma / nota.length);
window.document.write("Média: ", media);



var idades = [], soma_Idades = 0, media_Idades = 0, opcao, op, cont = 0;
do
{
  idades[cont] = Number.parseInt(window.frames.prompt('Idade ' + cont + ': '));
  soma_Idades += idades[cont];
  cont += 1;
  opcao = window.frames.prompt('Outra nota? s ou n ');
  op = opcao.toLocaleUpperCase(); 
} while (op != 'N');
media_Idades = soma_Idades / idades.length;
window.document.write("<br/> Média de idades: " + media_Idades);

