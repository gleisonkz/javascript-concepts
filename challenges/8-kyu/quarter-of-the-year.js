/*

Kata Nível 8 kyu - Quarter of the year

Dado um mês como um número inteiro de 1 a 12, retorne a qual 
trimestre do ano ele pertence como um número inteiro.

Por exemplo: mês 2 (fevereiro), faz parte do primeiro trimestre; 
o mês 6 (junho), faz parte do segundo trimestre; 
e o mês 11 (novembro), faz parte do quarto trimestre.
*/

function quarterOf(month) {
  const quartes = ["", 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
  return quartes[month];
}

function quarterOf2(month) {
  return Math.ceil(month / 3);
}

{
  // Teste 1 deve retornar 1
  const sample = 1;
  console.log(quarterOf(sample));
  console.log(assert(sample, 1));
}

{
  // Teste 2 deve retornar 1
  const sample = 2;
  console.log(quarterOf(sample));
  console.log(assert(sample, 1));
}
{
  // Teste 3 deve retornar 1
  const sample = 3;
  console.log(quarterOf(sample));
  console.log(assert(sample, 1));
}
{
  // Teste 4 deve retornar 2
  const sample = 4;
  console.log(quarterOf(sample));
  console.log(assert(sample, 2));
}
{
  // Teste 5 deve retornar 2
  const sample = 5;
  console.log(quarterOf(sample));
  console.log(assert(sample, 2));
}
{
  // Teste 6 deve retornar 2
  const sample = 6;
  console.log(quarterOf(sample));
  console.log(assert(sample, 2));
}
{
  // Teste 7 deve retornar 3
  const sample = 7;
  console.log(quarterOf(sample));
  console.log(assert(sample, 3));
}
{
  // Teste 8 deve retornar 3
  const sample = 8;
  console.log(quarterOf(sample));
  console.log(assert(sample, 3));
}
{
  // Teste 9 deve retornar 3
  const sample = 9;
  console.log(quarterOf(sample));
  console.log(assert(sample, 3));
}
{
  // Teste 10 deve retornar 4
  const sample = 10;
  console.log(quarterOf(sample));
  console.log(assert(sample, 4));
}
{
  // Teste 11 deve retornar 4
  const sample = 11;
  console.log(quarterOf(sample));
  console.log(assert(sample, 4));
}
{
  // Teste 12 deve retornar 4
  const sample = 12;
  console.log(quarterOf(sample));
  console.log(assert(sample, 4));
}

function assert(sample, expected) {
  const resultFn = quarterOf(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
