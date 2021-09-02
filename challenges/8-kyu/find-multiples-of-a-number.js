/*

Kata Nível 8 kyu - Find Multiples of a Number

Neste exercício simples, você construirá um programa que recebe um valor inteiro 
e retorna uma lista de seus múltiplos até um outro valor limite. 

Se o limite for um múltiplo de um inteiro, ele também deve ser incluído. 
Sempre haverá apenas inteiros positivos passados para a função, não consistindo em 0. 

O limite sempre será maior do que a base.

Por exemplo, se os parâmetros passados forem (2, 6), a função deve retornar [2, 4, 6], 
pois 2, 4 e 6 são os múltiplos de 2 a 6.

*/

function findMultiples(integer, limit) {
  let primes = [];

  for (let index = integer; index <= limit; index += integer) {
    primes.push(index);
  }

  return primes;
}

function findMultiples(integer, limit) {
  // const lengthFactor = Math.floor(limit / integer);
  // const lengthFactor = ~~(limit / integer);
  const lengthFactor = (limit / integer) ^ 0;

  const multiples = Array(lengthFactor);

  return Array.from(multiples, (_, index) => ++index * integer);
}

{
  // Teste 1 deve retornar [5, 10, 15, 20, 25]

  const [integer, limit] = [5, 25];
  const expected = [5, 10, 15, 20, 25];
  console.log(findMultiples(integer, limit));
  console.log(assert(integer, limit, expected));
}

{
  // Teste 2 deve retornar [1, 2]
  const [integer, limit] = [1, 2];
  const expected = [1, 2];
  console.log(findMultiples(integer, limit));
  console.log(assert(integer, limit, expected));
}

{
  // Teste 3 deve retornar [5]
  const [integer, limit] = [5, 7];
  const expected = [5];
  console.log(findMultiples(integer, limit));
  console.log(assert(integer, limit, expected));
}

{
  // Teste 4 deve retornar [4, 8, 12, 16, 20, 24]
  const [integer, limit] = [4, 27];
  const expected = [4, 8, 12, 16, 20, 24];
  console.log(findMultiples(integer, limit));
  console.log(assert(integer, limit, expected));
}

{
  // Teste 5 deve retornar [11, 22, 33, 44]
  const [integer, limit] = [11, 54];
  const expected = [11, 22, 33, 44];
  console.log(findMultiples(integer, limit));
  console.log(assert(integer, limit, expected));
}

function assert(integer, limit, expected) {
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

  const resultFn = findMultiples(integer, limit);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
