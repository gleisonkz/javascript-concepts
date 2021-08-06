/*
Kata Nível 8 kyu - Counting sheep

Considere um array de ovelhas onde algumas 
ovelhas podem estar faltando em seu lugar.

escreva uma função que conte o número de ovelhas presentes no array 
(true significa presente).

exemplo:

[true, true, false] deve retornar 17

Dica: não se esqueça de verificar se há valores inválidos, como null / undefined
*/

function countSheeps(sheeps) {
  return sheeps.filter(Boolean).length;
}

{
  // Teste 1 deve retornar 1
  const sample = [true, false];
  const expected = 1;
  console.log(countSheeps(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar 500
  let sample = [];
  for (let index = 0; index < 500; index++) sample.push(true);
  for (let index = 0; index < 5; index++) sample.push(undefined);
  for (let index = 0; index < 100; index++) sample.push(false);
  const expected = 500;
  console.log(countSheeps(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar 0
  let sample = [];
  for (let index = 0; index < 500; index++) sample.push(null);
  for (let index = 0; index < 5; index++) sample.push(undefined);
  for (let index = 0; index < 100; index++) sample.push(false);
  const expected = 0;
  console.log(countSheeps(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = countSheeps(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
