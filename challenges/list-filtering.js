/*

Filtrando Arrays

Neste desáfio, você criará uma função que pega um 
array de números não negativos e strings e 
retorna uma novo array apenas com os inteiros.

Exemplo: para o número 1234 deve ser retornado o número 10011010010, 
*/

function filterIntegers(array) {
  return array.filter(Number.isInteger);
}

// Teste 1 deve retornar [1,2];
console.log(filterIntegers([1, 2, "a", "b"]));

// Teste 2 deve retornar [1, 0, 15];
console.log(filterIntegers([1, "a", "b", 0, 15]));

// Teste 3 deve retornar [1, 2, 123];
console.log(filterIntegers([1, 2, "abcdf", "1", "123", 123]));

// Teste 4 deve retornar [0, 0, 7];
console.log(filterIntegers([0, 0, 1.5, "hi", "5", 7, "123"]));

// Teste 5 deve retornar [];
console.log(filterIntegers([4.5, "hi", "5", 2.7, "123"]));
