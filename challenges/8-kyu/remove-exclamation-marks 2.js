/*

Kata Nível 8 kyu - Remove exclamation marks 2

Escreva uma função que que remove 
todos os pontos de exclamação apenas do final de uma string.

*/

function removeExclamationMarks(str) {
  return str.replace(/\!+$/g, "");
}

{
  // Teste 1 deve retornar "Hi"
  const sample = "Hi!";
  const expected = "Hi";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar "Hi"
  const sample = "Hi!!!";
  const expected = "Hi";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar !Hi
  const sample = "!Hi";
  const expected = "!Hi";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 4 deve retornar !Hi";
  const sample = "!Hi!";
  const expected = "!Hi";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 5 deve retornar !Hi";
  const sample = "Hi! Hi!";
  const expected = "Hi! Hi";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 6 deve retornar "Hi";
  const sample = "Hi";
  const expected = "Hi";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return removeExclamationMarks(sample) === expected ? "OK" : "Algo deu errado";
}
