// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionarios = [
  { nome: "Carlos", salario: 2500 },
  { nome: "Mariana", salario: 3500 },
  { nome: "João", salario: 2800 },
  { nome: "Fernanda", salario: 4200 },
  { nome: "Lucas", salario: 3100 }
];

const salariosAltos = funcionarios.filter((funcionario) => funcionario.salario > 3000);

console.log(salariosAltos);