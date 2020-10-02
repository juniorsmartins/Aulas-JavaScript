var array1 = ["blue", "red", "yellow"];
var array2 = [];
array2 = array1;
array2[0] = "gray";
for (let contador = 0; contador < 3; contador++)
{
  window.document.write("Array1 = " + array1[contador],"<br/>" + "Array2 = " + array2[contador] + "<br/><br/>");
};

window.document.write("<br/><br/>");

var palavra1 = ["Alfredo"];
var palavra2 = ["Alfredo"];

function igualdade (a,b)
{
  if (palavra1.length != palavra2.length) return false;
  for (let cont = 0; cont <= palavra1.length; cont++)
  {
    if (palavra1[cont] != palavra2[cont]) return false;
    return true;
  };
};

var iguais = igualdade(palavra1, palavra2);
window.document.write(iguais);

