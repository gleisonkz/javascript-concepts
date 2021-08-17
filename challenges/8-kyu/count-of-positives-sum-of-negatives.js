/*

Kata Nível 8 kyu - Count of positives / sum of negatives

Dado um array de inteiros retorne um array onde:
- O primeiro elemento é a CONTAGEM dos números positivos
- O segundo elemento é a SOMA dos números negativos. 
- Se o array de entrada estiver vazio ou nulo, retorne uma array vazio.
*/

function countPositivesSumNegatives(numbers) {
  const isFalsyOrEmpty = !numbers || !numbers.length;
  if (isFalsyOrEmpty) return [];

  const countSum = numbers.reduce(
    ([positive, negative], number) => {
      const isPositive = number > 0;
      return isPositive
        ? [++positive, negative]
        : [positive, (negative += number)];
    },
    [0, 0]
  );
  return countSum;
}

function countPositivesSumNegatives(numbers) {
  const isFalsyOrEmpty = !numbers || !numbers.length;
  return isFalsyOrEmpty
    ? []
    : [
        numbers.filter((number) => number > 0).length,
        numbers.reduce((acc, item) => (item < 0 ? acc + item : acc), 0),
      ];
}

function countPositivesSumNegatives(numbers) {
  const isFalsyOrEmpty = !numbers || !numbers.length;
  if (isFalsyOrEmpty) return [];

  let [count, sum] = [0, 0];

  for (const number of numbers) {
    const isPositive = number > 0;
    if (isPositive) {
      count++;
      continue;
    }
    sum += number;
  }

  return [count, sum];
}

{
  // Teste 1 deve retornar [6, -15]
  const numbers = [1, 2, 3, -4, -5, -6];
  const expected = [3, -15];
  console.log(countPositivesSumNegatives(numbers));
  console.log(assert(numbers, expected));
}

{
  // Teste 2 deve retornar []
  const numbers = [];
  const expected = [];
  console.log(countPositivesSumNegatives(numbers));
  console.log(assert(numbers, expected));
}

{
  // Teste 3 deve retornar [1, -1]
  const numbers = [1, -1];
  const expected = [1, -1];
  console.log(countPositivesSumNegatives(numbers));
  console.log(assert(numbers, expected));
}

{
  // Teste 4 deve retornar [5, -15]
  const numbers = [1, 2, 3, -4, -5, -6, 7, 8];
  const expected = [5, -15];
  console.log(countPositivesSumNegatives(numbers));
  console.log(assert(numbers, expected));
}

{
  // Teste 5 deve retornar [33, -2102]
  const numbers = [
    -37, -88, -43, 48, -47, -50, -20, 33, 27, -31, -55, -58, -53, 8, -79, 87,
    -85, 46, -78, 17, -73, -54, 85, -44, 89, 52, -76, 46, 7, 47, -38, -52, -95,
    -17, -13, -1, 42, -64, -91, -99, 95, 67, 47, -34, -5, 99, 18, 41, 17, -71,
    32, 19, 55, 77, -49, -92, 42, -86, 37, 63, -4, -33, 5, 21, -9, -98, 69, -54,
    -89, -2, 77, 84, -35,
  ];
  const expected = [33, -2102];
  console.log(countPositivesSumNegatives(numbers));
  console.log(assert(numbers, expected));
}
{
  // Teste 6 deve retornar [6, -122]
  const numbers = [60, -7, 34, 49, 2, -19, 32, -96, 26];
  const expected = [6, -122];
  console.log(countPositivesSumNegatives(numbers));
  console.log(assert(numbers, expected));
}

function assert(numbers, expected) {
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

  const resultFn = countPositivesSumNegatives(numbers);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
