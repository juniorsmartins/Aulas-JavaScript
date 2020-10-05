var frutas, variavel2, variavel3;

frutas = ["Banana", "Melão", "Limão", "Uva"];
variavel2 = frutas.length;
variavel3 = "<ul>";

for (let contador = 0; contador <= variavel2; contador+=1)
{
  variavel3 += ("<li>" + frutas[contador] + "</li>");
};

window.document.write("<br/> Tamanho: ", variavel2);
window.document.write("<br/> Resultado: ", variavel3);
window.document.write("<br/>" + frutas + "<br/>");

frutas[frutas.length] = "Goiaba";
window.document.write("<br/>", frutas);

