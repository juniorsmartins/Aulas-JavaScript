/* 
  Livro: Lógica de Programação - Crie programas em JavaScript
  Objetivo: Aprender sobre window.prompt
*/

function calculaDias(idade_usuario)
{
  let dias = (idade_usuario * 365);
  return (dias);
}

function calculaHoras(dias_usuario)
{
  let horas = (dias_usuario * 24);
  return (horas);
}

function calculaBatimentos(minutos_usuario)
{
  let batimentos = (minutos_usuario * 80);
  return (batimentos);
}

function calculaMinutos(horas_usuario) 
{
  let minutos = (horas_usuario * 60);
  document.write("<br/>você viveu " + minutos + " minutos!<br/>");
  let batimentos_vividos = calculaBatimentos(minutos)
  document.write("<br/> você viveu " + batimentos_vividos + " batimentos!");
  return (minutos);
}


// Entrada e apresentação de dados
var nome = window.prompt("Boa Tarde! Qual teu nome? ");
document.write("<br/>Seja Bem-vindo! " + nome + "<br/>");
var idade = parseInt(window.prompt(nome + ", qual tua idade? "));
document.write("<br/>" + nome + " possui " + idade + " anos.<br/>");

var dias_vividos = calculaDias(idade);
document.write("<br/>" + nome + ", você viveu " + dias_vividos + " dias!<br/>");

var horas_vividas = calculaHoras(dias_vividos);
document.write("<br/>" + nome + ", você viveu " + horas_vividas + " horas!<br/>");

var minutos_vividos = calculaMinutos(horas_vividas);



