/*

Kata Nível 8 kyu - The Wide-Mouthed frog!

O sapo de boca grande está particularmente 
interessado nos hábitos alimentares de outras criaturas.

Ele simplesmente não consegue parar de perguntar às 
criaturas que encontra o que elas gostam de comer. 
Mas então ele conheceu o alligator(crocodilo) que 
adora comer sapos de boca grande!

Quando ele encontra o alligator(crocodilo), 
ele faz uma boca minúscula.

Seu objetivo neste kata é criar o método mouthSize
que recebe um animal como argumento que corresponde 
ao animal encontrado pelo sapo. 

Se este for um alligator(crocodilo) (não faz distinção entre maiúsculas e minúsculas),
retorne small, caso contrário, retorne large.


*/

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

// Teste 1 deve retornar wide
let sample = "toucan";
console.log(mouthSize(sample));
console.log(assert(sample, "wide"));

// Teste 2 deve retornar wide
sample = "ant bear";
console.log(mouthSize(sample));
console.log(assert(sample, "wide"));

// Teste 3 deve retornar small
sample = "alligator";
console.log(mouthSize(sample));
console.log(assert(sample, "small"));

// Teste 4 deve retornar small
sample = "ALLIGATOR";
console.log(mouthSize(sample));
console.log(assert(sample, "small"));

// Teste 5 deve retornar small
sample = "AlLIgATOr";
console.log(mouthSize(sample));
console.log(assert(sample, "small"));

function assert(sample, expected) {
  return mouthSize(sample) === expected ? "OK" : "Algo deu errado";
}
