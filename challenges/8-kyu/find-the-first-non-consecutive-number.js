/*

Kata Nível 8 kyu - Find the smallest integer in the array

Implemente a função abaixo que deve retornar o menor inteiro contigo no array.
*/

function findSmallestInt(numbers) {
  return Math.min(...numbers);
}

function findSmallestInt(numbers) {
  return numbers.reduce((a, b) => Math.min(a, b));
}

function findSmallestInt(numbers) {
  return Math.min.apply(null, numbers);
}

function findSmallestInt(numbers) {
  return numbers.reduce((min, cur) => (min < cur ? min : cur));
}
function findSmallestInt(numbers) {
  [min] = numbers.sort((a, b) => a - b);
  return min;
}

{
  // Teste 1 deve retornar 8
  const sample = [78, 56, 232, 12, 8];
  const expected = 8;
  console.log(findSmallestInt(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar 12
  const sample = [78, 56, 232, 12, 18];
  const expected = 12;
  console.log(findSmallestInt(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar 56
  const sample = [78, 56, 232, 412, 228];
  const expected = 56;
  console.log(findSmallestInt(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 4 deve retornar 0
  const sample = [78, 56, 232, 12, 0];
  const expected = 0;
  console.log(findSmallestInt(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 5 deve retornar 1
  const sample = [1, 56, 232, 12, 8];
  const expected = 1;
  console.log(findSmallestInt(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = findSmallestInt(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
