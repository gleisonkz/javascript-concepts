/*

Kata Nível 8 kyu - Remove exclamation marks

Escreva uma função que que remove 
todos os pontos de exclamação de uma determinada string.

*/

function removeExclamationMarks(str) {
  return str.replace(/\!/g, "");
}

{
  // Teste 1 deve retornar Hello World
  const sample = "Hello World!";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, "Hello World"));
}

{
  // Teste 2 deve retornar Hello World
  const sample = "!Hell!o !Wor!ld";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, "Hello World"));
}

{
  // Teste 3 deve retornar Hello World
  const sample = "Hello World!!!";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, "Hello World"));
}

{
  // Teste 4 deve retornar Hello World
  const sample = "Hi! Hello!";
  console.log(removeExclamationMarks(sample));
  console.log(assert(sample, "Hi Hello"));
}

function assert(sample, expected) {
  return removeExclamationMarks(sample) === expected ? "OK" : "Algo deu errado";
}
