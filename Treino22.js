
function retornaSexo(sexo) {
  if (sexo == 'M') {
    return "Masculino";
  } else if (sexo == 'F') {
      return "Feminino";
    } else { 
        return "Outro";
      }
}

var resultado = retornaSexo('M');
console.log(resultado);
