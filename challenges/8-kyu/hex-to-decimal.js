/*

Kata Nível 8 kyu - Convert a Boolean to a String.

Implemente a função abaixo que deve converter um valor em hexadecimal
para decimal. 
*/

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

{
  // Teste 1 deve retornar 1
  const sample = "1";
  const expected = 1;
  console.log(hexToDec(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar 10
  const sample = "a";
  const expected = 10;
  console.log(hexToDec(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar 16
  const sample = "10";
  const expected = 16;
  console.log(hexToDec(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 4 deve retornar 255
  const sample = "FF";
  const expected = 255;
  console.log(hexToDec(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 5 deve retornar -12
  const sample = "-C";
  const expected = -12;
  console.log(hexToDec(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return hexToDec(sample) === expected ? "OK" : "Algo deu errado";
}
