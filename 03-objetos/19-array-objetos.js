// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const jogos = [
  { titulo: "The Legend of Zelda: Breath of the Wild", plataforma: "Nintendo Switch", classificacao: "Livre" },
  { titulo: "God of War Ragnarök", plataforma: "PlayStation 5", classificacao: "18+" },
  { titulo: "Elden Ring", plataforma: "PC", classificacao: "16+" }
];

jogos.forEach((jogo) => {
  console.log(`Título: ${jogo.titulo} | Plataforma: ${jogo.plataforma}`);
});