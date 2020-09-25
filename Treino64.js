let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

let maiorIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorIdade && possuiCarteiraDeTrabalho;
console.log(`O resultado de E: ${podeAplicar}`);

let maiorIdade2 = false;
let possuiCarteiraDeTrabalho2 = true;
let podeAplicar2 = maiorIdade2 || possuiCarteiraDeTrabalho2;
console.log(`O resultado de OU: ${podeAplicar2}`);
