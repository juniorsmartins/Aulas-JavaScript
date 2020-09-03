/* Aula de JavaScript - Aprendendo declarar variável + calcular + quebrar linha + arredondar resultado numérico */

document.write("Aula de JavaScript <br/>");
document.write("Declarar Variáveis e Calcular <br/>");
var num_1 = 5;
var num_2 = 2;
let num_3 = 3;
let soma;
var media;
soma = (num_1 + num_2 + num_3);
document.write("A soma dos números é: ", soma + "<br/>");
media = (soma / 3);
document.write("A média dos números somados é: ", Math.round(media) + "<br/>");

