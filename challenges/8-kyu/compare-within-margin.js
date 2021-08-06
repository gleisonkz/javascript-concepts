/*

Kata Nível 8 kyu - Compare Within Margin

Implemente a função closeCompare que deve aceitar 3 parâmetros: 
a, b e uma margem opcional. A função deve retornar 
se a é menor que, próximo a ou maior que b.

a é considerado "próximo de" b 
se a margem for maior ou igual à distância entre a e b.

Por favor observe o seguinte:

- Quando a estiver próximo de b, retorne 0.
- Quando a for menor que b, retorne -1.
- Quando a for maior que b, retorne 1.

Se a margem não for fornecida, trate-a como zero.

Exemplo 1
Se a = 3, b = 5 e margin = 3, 
closeCompare(a, b, margin) deve retornar 0.

Isso ocorre porque a e b não estão separados por mais de 3 números.

Exemplo 2
Se a = 3, b = 5 e margin = 0, 
closeCompare(a, b, margin) deve retornar -1.

Isso ocorre porque a distância entre a e b é maior que 0 e a é menor que b.
*/

const closeCompare = (a, b, margin = 0) => {
  const distance = Math.abs(a - b);
  if (margin >= distance) return 0;
  return Math.sign(a - b);
};

{
  // Teste 1 deve retornar -1
  const [a, b] = [4, 5];
  console.log(closeCompare(a, b));
  console.log(assert(a, b, 0, -1));
}
{
  // Teste 2 deve retornar 0
  const [a, b] = [5, 5];
  console.log(closeCompare(a, b));
  console.log(assert(a, b, 0, 0));
}
{
  // Teste 3 deve retornar 1
  const [a, b] = [6, 5];
  console.log(closeCompare(a, b));
  console.log(assert(a, b, 0, 1));
}
{
  // Teste 4 deve retornar -1
  const [a, b] = [-6, -5];
  console.log(closeCompare(a, b));
  console.log(assert(a, b, 0, -1));
}
{
  // Teste 5 deve retornar 0
  const [a, b, margin] = [2, 5, 3];
  console.log(closeCompare(a, b, margin));
  console.log(assert(a, b, margin, 0));
}
{
  // Teste 6 deve retornar 1
  const [a, b, margin] = [8.1, 5, 3];
  console.log(closeCompare(a, b, margin));
  console.log(assert(a, b, margin, 1));
}
{
  // Teste 7 deve retornar -1
  const [a, b, margin] = [1.99, 5, 3];
  console.log(closeCompare(a, b, margin));
  console.log(assert(a, b, margin, -1));
}
{
  // Teste 8 deve retornar 0
  const [a, b, margin] = [5, 5, 3];
  console.log(closeCompare(a, b, margin));
  console.log(assert(a, b, margin, 0));
}

function assert(a, b, margin, expected) {
  const resultFn = closeCompare(a, b, margin);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
