/*
Kata Nível 8 kyu - Musical Notes

Dado o seguinte array 
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
Implemente a função abaixo que deve retornar 
uma a nota musical a partir de um número inteiro.
caso o número seja maior que o tamanho do array, 
a contagem deve ser feita em modo circular.

*/

function getNote(number) {
  const isNegative = number < 0;
  const is2octaves = number > 12;

  const getSymbol = (index) => notes[index % notes.length];
  const getPositiveIndex = (index) => (is2octaves ? index - 12 : index);

  let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  let symbolIndex = isNegative ? Math.abs(number) - 1 : getPositiveIndex(number);
  if (isNegative) notes.reverse();
  return getSymbol(symbolIndex);
}

{
  // Teste 1 para 0 deve retornar C
  const sample = 0;
  const expected = "C";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 para 11 deve retornar B
  const sample = 11;
  const expected = "B";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 para 5 deve retornar F
  const sample = 5;
  const expected = "F";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 4 para 15 deve retornar D#
  const sample = 15;
  const expected = "D#";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 5 para -1 deve retornar B
  const sample = -1;
  const expected = "B";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 6 para -12 deve retornar C
  const sample = -12;
  const expected = "C";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 7 para -25 deve retornar "B"
  const sample = -25;
  const expected = "B";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 8 para 25 deve retornar "C#"
  const sample = 25;
  const expected = "C#";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = getNote(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
