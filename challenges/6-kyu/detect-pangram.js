/*Desafio Pangrama

Crie uma função que receba uma string como parâmetro e verifique se é ou não um Pangrama.
Retorne True se for, False se não. Ignore números e pontuação.

Um Pangrama é uma frase que contém todas as letras do alfabeto pelo menos uma vez. 
Por exemplo, a frase "The quick brown fox jumps over the lazy dog" é um pangrama, 
porque usa todas as letras de A-Z pelo menos uma vez (maiúsculas e minúsculas são irrelevantes).

*/

function isPangram(sentence) {
  const lowerCaseCharacters = [...sentence]
    .map((letter) =>
      letter
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036F]/g, "")
    )
    .join("");
  return new Set(lowerCaseCharacters.match(/[a-z]/g)).size === 26;
}

// Teste 1 deve retornar true
let sample = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sample));
console.log(assert(sample, true));

// Teste 2 deve retornar true
sample = "Thé quick brówn fíx jumps óver Thé lazy dóg";
console.log(isPangram(sample));
console.log(assert(sample, true));

// Teste 3 deve retornar true
sample = "Thé quick brõwn fíx jumps õver Thé lazy dõg";
console.log(isPangram(sample));
console.log(assert(sample, true));

// Teste 4 deve retornar true
sample = "Thé quick brõwn fíx jumps õver Thé lãzy dõg";
console.log(isPangram(sample));
console.log(assert(sample, true));

// Teste 5 deve retornar false
sample = "Thé quick brõwn jumps õver Thé lãzy dõg";
console.log(isPangram(sample));
console.log(assert(sample, false));

// Teste 6 deve retornar false
sample = "A";
console.log(isPangram(sample));
console.log(assert(sample, false));

function assert(sample, expected) {
  return isPangram(sample) === expected ? "OK" : "Algo deu errado";
}
