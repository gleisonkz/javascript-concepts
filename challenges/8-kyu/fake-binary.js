/*

Kata Nível 8 kyu - Fake Binary

Dada uma string de dígitos, você deve substituir qualquer dígito abaixo de 5 por '0' 
e qualquer dígito 5 e acima por '1'. 
Retorne a string resultante.
*/

function fakeBin(string) {
  const lessThan4 = /[0-4]/g;
  const greaterThan4 = /[5-9]/g;
  return string.replace(lessThan4, "0").replace(greaterThan4, "1");
}

function fakeBin(string) {
  const toFakeBinary = (number) => (number < 5 ? 0 : 1);
  return string.split("").map(toFakeBinary).join("");
}

function fakeBin(string) {
  const isDigit = /\d/g;
  const toFakeBinary = (number) => (number < 5 ? 0 : 1);
  return string.replace(isDigit, toFakeBinary);
}

function fakeBin(x) {
  return x.replace(/\d/g, (n) => "0000011111"[n]);
}

{
  // Teste 1 deve retornar "01011110001100111"
  const sample = "45385593107843568";
  const expected = "01011110001100111";
  console.log(fakeBin(sample));

  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar "101000111101101"
  const sample = "509321967506747";
  const expected = "101000111101101";
  console.log(fakeBin(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar "011011110000101010000011011"
  const sample = "366058562030849490134388085";
  const expected = "011011110000101010000011011";
  console.log(fakeBin(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = fakeBin(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
