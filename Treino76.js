var notas_Quantia = Number.parseInt(window.frames.prompt('Quer calcular quantas médias? '), 10);
var nota = [], soma = 0, media = 0;

for (let contador = 0; contador <= (notas_Quantia - 1); contador+=1)
{
  nota[contador] = Number.parseFloat(window.frames.prompt('Nota ' + contador + ": "));
  soma += nota[contador];
};
media = (soma / nota.length);
window.document.write("Média: ", media);
