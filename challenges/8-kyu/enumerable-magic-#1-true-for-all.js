/*

Kata Nível 8 kyu - Enumerable Magic #1 - True for All?

Crie um método que receba uma array e um predicate 
e retorne verdadeiro se o predicate retornar verdadeiro 
para todos os elementos do array. 
Caso contrário, ele deve retornar falso. 
Se o array estiver vazio, ele deve retornar verdadeiro, 
já que tecnicamente nada falhou no teste.
*/

const all = (array, predicate) => {
  return array.every(predicate);
};

{
  // Teste 1 deve retornar true
  const [arr, predicate] = [[1, 2, 3, 4, 5], (value) => value < 9];
  console.log(all(arr, predicate));
  console.log(assert(arr, predicate, true));
}
{
  // Teste 2 deve retornar false
  const [arr, predicate] = [[1, 2, 3, 4, 5], (value) => value > 9];
  console.log(all(arr, predicate));
  console.log(assert(arr, predicate, false));
}

function assert(arr, predicate, expected) {
  const resultFn = all(arr, predicate);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
