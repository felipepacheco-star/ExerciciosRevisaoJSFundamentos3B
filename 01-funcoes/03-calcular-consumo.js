// EXERCÍCIO 03 - CALCULAR CONSUMO
// Crie uma função que receba a distância percorrida e os litros utilizados.
// A função deve calcular e retornar o consumo médio em quilômetros por litro.
// Teste a função e mostre o resultado no console.
//
// Escreva sua solução abaixo:

function calcularConsumo(distancia, litros) {
  return distancia / litros;
}

const consumoMedio = calcularConsumo(300, 25);
console.log(`Consumo médio: ${consumoMedio} km/l`);