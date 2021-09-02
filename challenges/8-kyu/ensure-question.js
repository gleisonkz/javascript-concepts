/*
Kata Nível 8 kyu - Ensure question

Implemente a função abaixo que deve retornar uma string 
com um ponto de interrogação ("?") no final,
somente quando a string original não terminar com um com um ponto de interrogação.
caso contrário retorne a retorna a string original.

*/

function ensureQuestion(string) {
  const hasQuestionMark = string.endsWith("?");
  return hasQuestionMark ? string : `${string}?`;
}

function ensureQuestion(string) {
  const hasQuestionMark = string[-1] === "?";
  return hasQuestionMark ? string : `${string}?`;
}
function ensureQuestion(string) {
  return /\?$/.test(string) ? string : `${string}?`;
}

{
  // Teste 1 deve retornar "?"
  const sample = "";
  const expected = "?";
  console.log(ensureQuestion(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar "Yes?"
  const sample = "Yes";
  const expected = "Yes?";
  console.log(ensureQuestion(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar "No"
  const sample = "No?";
  const expected = "No?";
  console.log(ensureQuestion(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 4 deve retornar "?No?"
  const sample = "?No";
  const expected = "?No?";
  console.log(ensureQuestion(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = ensureQuestion(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
