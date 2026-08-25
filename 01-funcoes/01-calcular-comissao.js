// EXERCÍCIO 01 - CALCULAR COMISSÃO
// Crie uma função chamada calcularComissao que receba o valor de uma venda
// e a porcentagem de comissão. A função deve retornar o valor da comissão.
// Teste com uma venda de R$ 800 e comissão de 5%.
// 
// Saída esperada: Comissão: R$ 40
//
// Escreva sua solução abaixo:

JavaScript
function calcularComissao(valorVenda, porcentagemComissao) {
  return (valorVenda * porcentagemComissao) / 100;
}

const comissao = calcularComissao(800, 5);
console.log(`Comissão: R$ ${comissao}`);