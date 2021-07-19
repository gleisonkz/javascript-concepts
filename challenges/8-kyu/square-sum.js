/*

Kata Nível 8 kyu - Square(n) Sum

Complete a função de soma quadrada para que cada número passado 
para ela quadrada e então some os resultados. 

Por exemplo, para [1, 2, 2], deve retornar 9 
porque 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

Nota: A string str nunca será nula.
*/

const squareSum = (numbers) => {
  return numbers.reduce((total, number) => (total += number ** 2), 0);
};

// Teste 1 deve retornar one-two-three
let sample = [1, 2];
console.log(squareSum(sample));
console.log(assert(sample, 5));

// Teste 2 deve retornar ""
sample = [0, 3, 4, 5];
console.log(squareSum(sample));
console.log(assert(sample, 50));

// Teste 3 deve retornar no dots
sample = [];
console.log(squareSum(sample));
console.log(assert(sample, 0));

// Teste 4 deve retornar no dots
sample = [-1, -2];
console.log(squareSum(sample));
console.log(assert(sample, 5));

// Teste 5 deve retornar no dots
sample = [-1, 0, 1];
console.log(squareSum(sample));
console.log(assert(sample, 2));

function assert(sample, expected) {
  return squareSum(sample) === expected ? "OK" : "Algo deu errado";
}
