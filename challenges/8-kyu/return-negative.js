/*

Kata Nível 8 kyu - Return Negative

Nesta tarefa simples, você recebe um número e 
deve torná-lo negativo. 
Mas talvez o número já seja negativo?

Notas: 

- O número já pode ser negativo, caso em que nenhuma alteração é necessária. 

- Zero (0) não é verificado para nenhum sinal específico 
pois zeros negativos não fazem sentido matemático.

*/

const makeNegative = (num) => {
  return -`${num}`.replace("-", "");
};

{
  // Teste 1 deve retornar -1
  const sample = 1;
  console.log(makeNegative(sample));
  console.log(assert(sample, -1));
}
{
  // Teste 2 deve retornar -5
  const sample = -5;
  console.log(makeNegative(sample));
  console.log(assert(sample, -5));
}
{
  // Teste 3 deve retornar 0
  const sample = 0;
  console.log(makeNegative(sample));
  console.log(assert(sample, 0));
}
{
  // Teste 4 deve retornar -0.12
  const sample = 0.12;
  console.log(makeNegative(sample));
  console.log(assert(sample, -0.12));
}

function assert(sample, expected) {
  const resultFn = makeNegative(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
