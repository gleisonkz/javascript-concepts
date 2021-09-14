/*

Kata Nível 8 kyu - Short Long Short

Dados 2 strings, a e b, retorne uma string na forma short + long + short, 
com a string mais curta no inicio e final da concatenação, e a string mais longa ao meio.
As strings não terão o mesmo comprimento, mas podem estar vazias.

*/

function shortLongShort(a, b) {
  const getShorterLonger = (a, b) => (a.length > b.length ? [b, a] : [a, b]);
  const [shorter, longer] = getShorterLonger(a, b);
  return `${shorter}${longer}${shorter}`;
}

{
  //Teste 1
  const [a, b] = ["45", "1"];
  const expected = "1451"; // valor esperado

  console.log(shortLongShort(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 2
  const [a, b] = ["13", "200"];
  const expected = "1320013"; // valor esperado

  console.log(shortLongShort(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 3
  const [a, b] = ["Soon", "Me"];
  const expected = "MeSoonMe"; // valor esperado

  console.log(shortLongShort(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 4
  const [a, b] = ["U", "False"];
  const expected = "UFalseU"; // valor esperado

  console.log(shortLongShort(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 5
  const [a, b] = ["", ""];
  const expected = ""; // valor esperado

  console.log(shortLongShort(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 6
  const [a, b] = ["", "1"];
  const expected = "1"; // valor esperado

  console.log(shortLongShort(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 7
  const [a, b] = ["1", ""];
  const expected = "1"; // valor esperado

  console.log(shortLongShort(a, b));
  console.log(assert(a, b, expected));
}

function assert(a, b, expected) {
  const resultFn = shortLongShort(a, b);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
