// EXERCÍCIO 04 - CONVERTER MINUTOS
// Crie uma Function Expression que receba uma quantidade de minutos
// e retorne o valor convertido em segundos.
// Lembrete: um minuto possui 60 segundos.
//
// Escreva sua solução abaixo:


const converterMinutosParaSegundos = function (minutos) {
  return minutos * 60;
};

const resultado = converterMinutosParaSegundos(5);
console.log(`5 minutos equivalem a ${resultado} segundos.`); 