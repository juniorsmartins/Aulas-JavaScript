var nome = window.prompt('Nome: ');
var sobrenome = window.prompt('Sobrenome: ');
n = nome.toUpperCase();
s = sobrenome.toLowerCase();
window.document.write(n + " " + s);

window.document.write("<br/><br/>----------------------------------------<br/><br/>");

const pessoa = {
  nome: "Mário",
  idade: 30
};

for (let itens in pessoa)
{
  document.write(itens + ": " + pessoa[itens] + "<br/>");
};

const carro = ["Porsch", "Ferrari", "Lamborghini"];

for (let chave of carro)
{
  document.write(chave + "<br/>");
};

