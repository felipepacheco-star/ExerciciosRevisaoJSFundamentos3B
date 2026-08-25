// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const ingresso = {
  evento: "Show de Rock",
  preco: 100,
  quantidade: 2
};

console.log("Antes:", { ...ingresso });

ingresso.preco = 150;
ingresso.quantidade += 2;

console.log("Depois:", ingresso);

