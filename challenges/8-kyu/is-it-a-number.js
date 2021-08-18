/*

Kata Nível 8 kyu - Is it a number?

Implemente a função abaixo que dada uma string 
deve retornará verdadeiro se for um único inteiro válido ou número flutuante.
ou falso se não for. 

Exemplos válidos, deve retornar true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

Exemplos inválidos, deve retornar false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

*/
function isDigit(string) {
  const stringWithoutSpace = +string.trim();
  if (!stringWithoutSpace) return false;
  return !isNaN(stringWithoutSpace);
}

console.log(!isNaN(+""));

{
  // Teste 1 deve retornar true
  const sample = "3";
  const expected = true;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar true
  const sample = "  3  ";
  const expected = true;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar true
  const sample = "-3.23";
  const expected = true;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 4 deve retornar false
  const sample = "3-4";
  const expected = false;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 5 deve retornar false
  const sample = "  3   5";
  const expected = false;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 6 deve retornar false
  const sample = "3 5";
  const expected = false;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 7 deve retornar false
  const sample = "zero";
  const expected = false;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 7 deve retornar true
  const sample = "-234.4";
  const expected = true;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 8 deve retornar false
  const sample = "";
  const expected = false;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 9 deve retornar false
  const sample = "-0";
  const expected = false;
  console.log(isDigit(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  return isDigit(sample) === expected ? "OK" : "Algo deu errado";
}
