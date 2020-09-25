const pessoa = 
{
    nome: "Mário",
    idade: 25
};

for (let chave in pessoa) 
{
  console.log(chave);
}

const cores = ["red", "green", "blue"];

for (let indices in cores)
{
  console.log(indices, cores[indices]);
};

for (let indices in cores)
{
  console.log(cores[indices]);
};


for (let cor of cores) 
{
    console.log(cor);
};
