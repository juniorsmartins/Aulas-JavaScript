/* 
  Livro: Lógica de Programação - Crie programas em JavaScript
  Objetivo: Aprender sobre window.prompt
*/

var nome = window.prompt("Boa Tarde! Qual teu nome? ");
document.write("<br/>Seja Bem-vindo! " + nome + "<br/>");
var idade = window.prompt(nome + ", qual tua idade? ");
document.write("<br/>" + nome + " possui " + idade + " anos.<br/>");
var dias = (idade * 365);
document.write("<br/>" + nome + ", você tem " + dias + " dias de vida!<br/>");
var horas = (dias * 24);
var minutos = (horas * 60);
var batimentos = (minutos * 80);
document.write("<br/>" + nome + ", você viveu por " + horas + " horas, " + minutos + " minutos e teve " +  batimentos + " batimentos cardíacos.");

