/*

Kata Nível 8 kyu - Powers of 2

Complete a função que recebe um inteiro não negativo n como entrada
e retorna uma lista de todas as potências de 2 
com o expoente variando de 0 a n (inclusive).

Por exemplo, para [1, 2, 2], deve retornar 9 
porque 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

*/

/*

Kata Nível 8 kyu - Powers of 2

Complete a função que recebe um inteiro não negativo n como entrada
e retorna uma lista de todas as potências de 2 
com o expoente variando de 0 a n (inclusive).

Por exemplo, para [1, 2, 2], deve retornar 9 
porque 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

*/

function powersOfTwo(number) {
  return Array.from(Array(number + 1), (_, index) => 2 ** index);
}

{
  // Teste 1 deve retornar [1]
  const sample = 0;
  console.log(powersOfTwo(sample));
  console.log(assert(sample, [1]));
}
{
  // Teste 2 deve retornar [1, 2]
  const sample = 1;
  console.log(powersOfTwo(sample));
  console.log(assert(sample, [1, 2]));
}
{
  // Teste 3 deve retornar [1, 2, 4, 8, 16]
  const sample = 4;
  console.log(powersOfTwo(sample));
  console.log(assert(sample, [1, 2, 4, 8, 16]));
}

function assert(sample, expected) {
  return powersOfTwo(sample) === expected ? "OK" : "Algo deu errado";
}

{
  // Teste 1 deve retornar [1]
  const sample = 0;
  console.log(powersOfTwo(sample));
  console.log(assert(sample, [1]));
}
{
  // Teste 2 deve retornar [1, 2]
  const sample = 1;
  console.log(powersOfTwo(sample));
  console.log(assert(sample, [1, 2]));
}
{
  // Teste 3 deve retornar [1, 2, 4, 8, 16]
  const sample = 4;
  console.log(powersOfTwo(sample));
  console.log(assert(sample, [1, 2, 4, 8, 16]));
}

function assert(sample, expected) {
  return powersOfTwo(sample) === expected ? "OK" : "Algo deu errado";
}
