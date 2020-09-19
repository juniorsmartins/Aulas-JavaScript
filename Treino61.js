console.log(" ");
console.log("Calcular o salário bruto (SB), sendo este a multiplicação de horas trabalhadas (HT) por valor da hora (VH).");
console.log(" ");

var valor_Hora = parseFloat(window.prompt('Entrada', 'Qual o valor da hora de trabalho? '));
var horas_Trabalhadas = parseFloat(window.prompt('Entrada', 'Quantas horas trabalhadas? '));

var salario_Bruto = (horas_Trabalhadas * valor_Hora);

console.log(`A hora de trabalho vale ${valor_Hora}.`);
console.log(" ");
console.log(`E você trabalhou por ${horas_Trabalhadas} horas.`);
console.log(" ");
console.log(`Portanto, o salário bruto é de R$ ${salario_Bruto}`);
console.log(" ");

