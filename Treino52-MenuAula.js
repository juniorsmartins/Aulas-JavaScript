// Início do meu programa
var opcao_Rotear;
var variavel_1, variavel_2, variavel_3, variavel_4;

function painel_Inicial()
{

  opcao_Rotear = parseInt(document.getElementById('opcao_Menu').value);
  menu_Roteamento(opcao_Rotear);


}
// Fim do meu programa



// Início do Roteador do Menu
function menu_Roteamento() // função para direcionar o usuário para a ação escolhida
{
  switch (opcao_Rotear)
  {
    case 1 : 
      exercicio_Um();
    break;

    case 2 : 
      exercicio_Dois();
    break;

    case 3 : 
      exercicio_Tres();
    break;

    case 4 : 
      exercicio_Quatro();
    break;

    case 5 : 
      exercicio_Cinco();
    break;

    case 6 : 
      exercicio_Seis();
    break;

    case 7 : 
      exercicio_Sete();
    break;

    case 8 : 
      limpa_Mostra();
      limpa_Resposta();
      document.getElementById("mostra_1").innerHTML = "Tchau!";
    break;

    default :
      limpa_Mostra();
      limpa_Resposta();
      document.getElementById("mostra_1").innerHTML = "Opção Inválida!";
    ;
  }
}
// Fim do Roteador do Menu



// Início do Exercício 1
function exercicio_Um()
{
  limpa_Mostra();
  limpa_Resposta();

  document.writeln("Exercício 1 - Escreva um algoritmo para ler três valores inteiros e escrever na tela o maior e o menor deles. Considere que todos os valores são diferentes.");
  let valor_1 = parseInt(window.prompt('ENTRADA DE DADOS', 'Digite o primeiro valor inteiro: '));
  let valor_2 = parseInt(window.prompt('ENTRADA DE DADOS', 'Digite o segundo valor inteiro: '));
  let valor_3 = parseInt(window.prompt('ENTRADA DE DADOS', 'Digite o terceiro valor inteiro: '));
  if (valor_1 > valor_2 && valor_1 > valor_3)
  {
    document.writeln("O maior valor é: " + valor_1);
    if (valor_2 > valor_3)
    {
      document.writeln("O segundo maior valor é: " + valor_2);
      document.writeln("O menor valor é: " + valor_3);
    } else 
      {
        document.writeln("O segundo maior valor é: " + valor_3);
        document.writeln("O menor valor é: " + valor_2);
      }
  } else if (valor_2 > valor_1 && valor_2 > valor_3)
    {
      document.writeln("O maior valor é: " + valor_2);
      if (valor_1 > valor_3)
      {
        document.writeln("O segundo maior valor é: " + valor_1);
        document.writeln("O menor valor é: " + valor_3);
      } else 
        {
          document.writeln("O segundo maior valor é: " + valor_3);
          document.writeln("O menor valor é: " + valor_1);
        }
    } else if (valor_3 > valor_1 && valor_3 > valor_2)
      {
        document.writeln("O maior valor é: " + valor_3);
        if (valor_1 > valor_2)
        {
          document.writeln("O segundo maior valor é: " + valor_1);
          document.writeln("O menor valor é: " + valor_2);          
        } else 
          {
            document.writeln("O segundo maior valor é: " + valor_2);
            document.writeln("O menor valor é: " + valor_1);
          }
      }
}
// Fim do Exercício 1



// Início do Exercício 2
function exercicio_Dois()
{
  // Apresentação no Front-Central
  limpa_Mostra();
  limpa_Resposta();

  document.getElementById("mostra_1").innerHTML = "Exercício 2 - Problemas";
  document.getElementById("mostra_2").innerHTML = "O algoritmo lê dois valores inteiros e depois executa as seguintes ações: ";
  document.getElementById("mostra_3").innerHTML = "1 - Se o resto da divisão da primeira pela segunda for 1, mostre a soma das variáveis mais o resto da divisão;";
  document.getElementById("mostra_4").innerHTML = "2 - Se o resto for dois, escreva se os valores são par ou ímpar;";
  document.getElementById("mostra_5").innerHTML = "3 - Se o resto for três, multiplique a soma dos valores pelo valor do primeiro;";
  document.getElementById("mostra_6").innerHTML = "4 - Se o resto for quatro, divida a soma dos valores pelo segundo, se este for diferente de zero;";
  document.getElementById("mostra_7").innerHTML = "5 - Mostre o quadrado dos valores em qualquer outra situação.";
  exercicio_Entrada_valor();
}


  function exercicio_Entrada_valor()
  {
    variavel_1 = document.getElementById('entrada_valor1').value;
    variavel_2 = document.getElementById('entrada_valor2').value;
    variavel_3 = document.getElementById('entrada_valor3').value;
    variavel_4 = document.getElementById('entrada_valor4').value;
  }


  function exercicio_Dois_Resp()
  {
    // Respostas do Exercício no Front-Direita
    document.getElementById("resposta_1").innerHTML = "Exercício 2 - Respostas";
    document.getElementById("resposta_2").innerHTML = "Teste" + variavel_1 + "teste2" + variavel_2;


  }
// Fim do Exercício 2



// Início do Exercício 3
function exercicio_Tres()
{
  limpa_Mostra();
  limpa_Resposta();
  document.getElementById("mostra_1").innerHTML = "Exercício 3";
}
// Fim do Exercício 3



// Início do Exercício 4
function exercicio_Quatro()
{
  limpa_Mostra();
  limpa_Resposta();
  document.getElementById("mostra_1").innerHTML = "Exercício 4";
}
// Fim do Exercício 4



// Início do Exercício 5
function exercicio_Cinco()
{
  limpa_Mostra();
  limpa_Resposta();
  document.getElementById("mostra_1").innerHTML = "Exercício 5";
}
// Fim do Exercício 5



// Início do Exercício 6
function exercicio_Seis()
{
  limpa_Mostra();
  limpa_Resposta();
  document.getElementById("mostra_1").innerHTML = "Exercício 6";
}
// Fim do Exercício 6



// Início do Exercício 7
function exercicio_Sete()
{
  limpa_Mostra();
  limpa_Resposta();
  document.getElementById("mostra_1").innerHTML = "Exercício 7";

}
// Fim do Exercício 7



// Função para limpar parágrafos no Front-Central
function limpa_Mostra()
{
  document.getElementById("mostra_1").innerHTML = "";
  document.getElementById("mostra_2").innerHTML = "";
  document.getElementById("mostra_3").innerHTML = "";
  document.getElementById("mostra_4").innerHTML = "";
  document.getElementById("mostra_5").innerHTML = "";
  document.getElementById("mostra_6").innerHTML = "";
  document.getElementById("mostra_7").innerHTML = "";
  document.getElementById("mostra_8").innerHTML = "";
  document.getElementById("mostra_9").innerHTML = "";
  document.getElementById("mostra_10").innerHTML = "";
}

// Função para limpar parágrafos no Front-Direita
function limpa_Resposta()
{
  document.getElementById("resposta_1").innerHTML = "";
  document.getElementById("resposta_2").innerHTML = "";
  document.getElementById("resposta_3").innerHTML = "";
  document.getElementById("resposta_4").innerHTML = "";
  document.getElementById("resposta_5").innerHTML = "";
  document.getElementById("resposta_6").innerHTML = "";
  document.getElementById("resposta_7").innerHTML = "";
  document.getElementById("resposta_8").innerHTML = "";
  document.getElementById("resposta_9").innerHTML = "";
  document.getElementById("resposta_10").innerHTML = "";
}
