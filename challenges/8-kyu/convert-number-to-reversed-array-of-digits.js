/*
Kata Nível 8 kyu - Convert number to reversed array of digits

Dado um número não negativo aleatório, 
você deve retornar os dígitos 
desse número em uma matriz na ordem inversa.

Exemplo: 348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
  return [...String(n)].reverse().map(Number);
}

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

// Teste 1 deve retornar [1, 3, 2, 5, 3]
let sample = 35231;
console.log(digitize(sample));
console.log(assert(sample, [1, 3, 2, 5, 3]));

// Teste 2 deve retornar 23582357
sample = 23582357;
console.log(digitize(sample));
console.log(assert(sample, [7, 5, 3, 2, 8, 5, 3, 2]));

// Teste 3 deve retornar small
sample = 984764738;
console.log(digitize(sample));
console.log(assert(sample, [8, 3, 7, 4, 6, 7, 4, 8, 9]));

// Teste 4 deve retornar small
sample = 45762893920;
console.log(digitize(sample));
console.log(assert(sample, [0, 2, 9, 3, 9, 8, 2, 6, 7, 5, 4]));

// Teste 5 deve retornar small
sample = 548702838394;
console.log(digitize(sample));
console.log(assert(sample, [4, 9, 3, 8, 3, 8, 2, 0, 7, 8, 4, 5]));

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

  const resultFn = digitize(sample);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}
