/*

Kata Nível 8 kyu - Multiple of index

Retorne um novo array consistindo de elementos que são múltiplos 
de seu próprio índice do array de entrada 

Alguns casos:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

*/

function multipleOfIndex(numbers) {
  return numbers.filter((number, index) => number % index === 0);
}

{
  // Teste 1 deve retornar [-6, 32, 25]
  const sample = [22, -6, 32, 82, 9, 25];
  const expected = [-6, 32, 25];
  console.log(multipleOfIndex(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar [-1, 10]
  const sample = [68, -1, 1, -7, 10, 10];
  const expected = [-1, 10];
  console.log(multipleOfIndex(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar [-11]
  const sample = [11, -11];
  const expected = [-11];
  console.log(multipleOfIndex(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 4 deve retornar [38, -44, -99]
  const sample = [28, 38, -44, -99, -13, -54, 77, -51];
  const expected = [38, -44, -99];
  console.log(multipleOfIndex(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 5 deve retornar [-49, 8, -60, 35]
  const sample = [-1, -49, -1, 67, 8, -60, 39, 35];
  const expected = [-49, 8, -60, 35];
  console.log(multipleOfIndex(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  const resultFn = multipleOfIndex(sample);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
