var vitorias = parseInt(window.prompt("Entrada de Dados", "Quantas vitórias teve teu time teve? "));
var empates = parseInt(window.prompt("Entrada de Dados", "Quantos empates teve teu time? "));
var pontos = ((vitorias * 3) + empates);

function pulaLinha()
{
  document.write("<br/>");
}

function mostra(pontos)
{
  document.write("O resultado eh: " + pontos);
}

pulaLinha();
mostra(pontos);
pulaLinha();

if (pontos > 28)
{
  document.write("Líder!");
} else {
    if (pontos < 28)
    {
      document.write("Correndo Atrás!")
    } else {
        if (pontos == 28)
        {
          document.write("Empatados!");
        }
      }
  }
