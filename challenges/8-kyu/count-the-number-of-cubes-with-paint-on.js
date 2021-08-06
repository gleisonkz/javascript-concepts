/*

Kata Nível 8 kyu - Count the number of cubes with paint on

Ao chegar em uma entrevista, você é apresentado a um cubo azul sólido.

O cubo é então mergulhado em tinta vermelha, cobrindo toda a superfície do cubo. 
O entrevistador então começa a cortar o cubo em todas 
as três dimensões um certo número de vezes.

Sua função receberá como parâmetro o número de vezes que o cubo foi cortado. 

Você deve retornar o número de cubos menores criados pelos cortes 
que têm pelo menos uma face vermelha.

Para deixar mais claro, (junto ao exercício no classroom tem uma imagem) 
que representa o cubo após (da esquerda para a direita)
0, 1 e 2 cortes terem sido feitos.
*/

function countSquares(cuts) {
  if (cuts === 0) return 1;
  const sizes = 6;
  return sizes * cuts ** 2 + 2;
}

{
  // Teste 1 deve retornar 26
  const sample = 2;
  const expected = 26;
  console.log(countSquares(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 2 deve retornar 98
  const sample = 4;
  const expected = 98;
  console.log(countSquares(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar 152
  const sample = 5;
  const expected = 152;
  console.log(countSquares(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar 3176
  const sample = 23;
  const expected = 3176;
  console.log(countSquares(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = countSquares(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
