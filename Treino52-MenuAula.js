var opcao_Rotear;

function menu_Opcoes() // função para chamar menu de opções
{
  document.writeln("***************************");
  document.writeln("***************************");
  document.writeln("********** MENU ***********");
  document.writeln("***************************");
  document.writeln("******* Exercicio 1 *******");
  document.writeln("******* Exercicio 2 *******");
  document.writeln("******* Exercicio 3 *******");
  document.writeln("******* Exercicio 4 *******");
  document.writeln("******* Exercicio 5 *******");
  document.writeln("******* Exercicio 6 *******");
  document.writeln("******* Exercicio 7 *******");
  document.writeln("********* Sair 8 **********");
  document.writeln("***************************");
  document.writeln("* Digite uma opção (1 a 8):");
  setInterval(4000);
}

function menu_Pergunta() // função para definir qual opção do menu o usuário deseja
{
  opcao_Rotear = parseInt(window.prompt('ENTRADA DE DADOS', 'Qual opção?'));
}

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

function exercicio_Dois()
{
  document.write("Exercício 2");
}

function exercicio_Tres()
{
  document.write("Exercício 3");
}

function exercicio_Quatro()
{
  document.write("Exercício 4");
}

function exercicio_Cinco()
{
  document.write("Exercício 5");
}

function exercicio_Seis()
{
  document.write("Exercício 6");
}

function exercicio_Sete()
{
  document.write("Exercício 7");
}






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
      setInterval(3000);
    break;

    default :
      document.write("Erro - Digite Novamente!");
      setInterval(3000);
    ;
  }
}


// Início do meu programa
do 
{
  menu_Opcoes();
  opcao_Rotear = menu_Pergunta();
  menu_Roteamento(opcao_Rotear);




} while (opcao_Rotear != 8);