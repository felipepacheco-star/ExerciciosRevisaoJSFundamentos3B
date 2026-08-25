// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Aluno com o campo privado #nota.
// Crie get nota e set nota. O setter deve aceitar somente valores entre 0 e 10.
// Crie um aluno, altere sua nota e mostre o resultado.
//
// Escreva sua solução abaixo:

class Aluno {
  #nota = 0;

  get nota() {
    return this.#nota;
  }

  set nota(novaNota) {
    if (novaNota >= 0 && novaNota <= 10) {
      this.#nota = novaNota;
    } else {
      console.log("A nota deve ser um valor entre 0 e 10.");
    }
  }
}

const aluno1 = new Aluno();

aluno1.nota = 8.5;
console.log("Nota do aluno:", aluno1.nota); 

aluno1.nota = 12; 
console.log("Nota permanece:", aluno1.nota); 