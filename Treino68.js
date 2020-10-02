var mostra = function(frase)
{
  document.write(frase + "<br/>");
};

var anoDeCopa = Number.parseInt(prompt("Qual o ano inicial? "), 10);
var anoLimite = Number.parseInt(prompt("Qual o ano limite? "), 10);

while(anoDeCopa <= anoLimite)
{
  mostra(anoDeCopa + " tem Copa!");
  anoDeCopa = anoDeCopa + 4;
};

mostra("Ufa! Esses foram os anos de Copa até " + anoLimite);
