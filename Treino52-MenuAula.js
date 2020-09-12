// Início do meu programa
var opcao_Rotear;
var conteudo;

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
      document.write("Tchau!");
    break;

    default :
      document.write("Opção Inválida!");
      setInterval(3000);
    ;
  }
}
// Fim do Roteador do Menu



// Início do Exercício 1
function exercicio_Um()
{
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
  document.write("Exercício 2");
}
// Fim do Exercício 2



// Início do Exercício 3
function exercicio_Tres()
{
  document.write("Exercício 3");
}
// Fim do Exercício 3



// Início do Exercício 4
function exercicio_Quatro()
{
  document.write("Exercício 4");
}
// Fim do Exercício 4



// Início do Exercício 5
function exercicio_Cinco()
{
  document.write("Exercício 5");
}
// Fim do Exercício 5



// Início do Exercício 6
function exercicio_Seis()
{
  document.write("Exercício 6");
}
// Fim do Exercício 6



// Início do Exercício 7
function exercicio_Sete()
{
  conteudo = document.getElementById('print').innerHTML;
  tela_impressao = window.open('about:blank');
  tela_impressao.document.write(conteudo);
  tela_impressao.window.print();
  tela_impressao.window.close();
}
// Fim do Exercício 7
