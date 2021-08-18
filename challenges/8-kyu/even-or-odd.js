/*

Kata Nível 8 kyu - Remove exclamation marks 2

Implemente a função abaixo que  recebe um inteiro como argumento 
e retorna "Par" para números pares ou "Ímpar" para números ímpares.

*/

function isEvenOrOdd(number) {
  const labels = ["Par", "Ímpar"];
  const labels = ["Par", "Ímpar"];
  const unsignedNumber = Math.abs(number);
  const index = unsignedNumber % 2;
  return labels[index];
}

function isEvenOrOdd(number) {
  return number % 2 ? "Ímpar" : "Par";
}

{
  // Teste 1 deve retornar "Par"
  const sample = 2;
  const expected = "Par";
  console.log(isEvenOrOdd(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar "Ímpar"
  const sample = 7;
  const expected = "Ímpar";
  console.log(isEvenOrOdd(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar "Par"
  const sample = -42;
  const expected = "Par";
  console.log(isEvenOrOdd(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 4 deve retornar "Ímpar"
  const sample = -7;
  const expected = "Ímpar";
  console.log(isEvenOrOdd(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 5 deve retornar "Par"
  const sample = 0;
  const expected = "Par";
  console.log(isEvenOrOdd(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return isEvenOrOdd(sample) === expected ? "OK" : "Algo deu errado";
}
