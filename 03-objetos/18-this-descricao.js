// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto curso com nome, modalidade e um método descrever().
// O método deve utilizar this e retornar uma frase com os dados do curso.
//
// Escreva sua solução abaixo:

const curso = {
  nome: "Desenvolvimento Web",
  modalidade: "EAD",
  descrever: function () {
    return `O curso de ${this.nome} é oferecido na modalidade ${this.modalidade}.`;
  }
};

console.log(curso.descrever());