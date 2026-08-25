// EXERCÍCIO 06 - FOREACH - CIDADES
// Crie um array com cinco cidades.
// Utilize forEach() para mostrar cada cidade em letras maiúsculas.
//
// Escreva sua solução abaixo:

const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Belo Horizonte"];

cidades.forEach((cidade) => {
  console.log(cidade.toUpperCase());
});