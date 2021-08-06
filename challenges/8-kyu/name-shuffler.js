/*

Kata Nível 8 kyu - Name Shuffler

Escreva uma função que retorna uma string na qual o nome é trocado pelo sobrenome.

exemplo:

nameShuffler('john McClane'); => "McClane john"
*/

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

function nameShuffler(str) {
  return str.replace(/^(.*) (.*)$/, "$2 $1");
}

{
  // Teste 1 deve retornar "McClane john"
  const sample = "john McClane";
  const expected = "McClane john";
  console.log(nameShuffler(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = nameShuffler(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
