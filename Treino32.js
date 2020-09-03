/* Aula de JavaScript */
/* Aprendendo calcular + fixar limite de casas decimais + concatenar + declarar variáveis + saída */ 

document.write("<h1>Álcool ou Gasolina?</h1><br/>");
let litrosConsumidos = 40;
let distanciaPercorrida = 480;
var quilometroPorLitro;
document.write("Foram consumidos " + litrosConsumidos + " litros de gasolina e percorridos " + distanciaPercorrida + " km.<br/>");
document.write("Portanto, o aproveitamento da gasolina foi de " + (quilometroPorLitro = distanciaPercorrida / litrosConsumidos) + " km por litro.<br/>");
let alcoolConsumido = 40;
var distanciaPercorridaAlcool = 300;
document.write("<br/>Foram consumidos " + alcoolConsumido + " litros de álcool e percorridos " + distanciaPercorridaAlcool + " km.<br/>");
quilometroPorLitro = (distanciaPercorridaAlcool / alcoolConsumido);
document.write("Portanto, o consumo do álcool foi de " + (quilometroPorLitro.toFixed(2)) + " km por litro");
