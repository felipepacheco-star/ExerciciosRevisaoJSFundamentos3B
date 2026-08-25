// EXERCÍCIO 07 - MAP - BÔNUS DE PONTUAÇÃO
// Considere o array: [20, 35, 40, 55].
// Utilize map() para criar um novo array adicionando 5 pontos a cada valor.
// Mostre o array original e o novo array.
//
// Escreva sua solução abaixo:

const pontuacoesOriginais = [20, 35, 40, 55];

const pontuacoesComBonus = pontuacoesOriginais.map((pontuacao) => pontuacao + 5);

console.log("Array original:", pontuacoesOriginais);
console.log("Novo array com bônus:", pontuacoesComBonus);