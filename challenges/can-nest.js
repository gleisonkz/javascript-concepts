/*
Crie uma função que retorne verdadeiro 
se o primeiro array puder 
ser aninhado dentro do segundo.

O array1 pode ser aninhado dentro de array2 se:

O valor mínimo do array 1 for maior que o valor mínimo do array 2
O valor máximo do array 1 for menor que o valor máximo do array 2

*/

function canNest(array1, array2) {
  const getMinMax = (array) => [Math.min(...array), Math.max(...array)];
  const [min1, max1] = getMinMax(array1);
  const [min2, max2] = getMinMax(array2);
  const isMinGreater = min1 > min2;
  const isMaxLesser = max1 < max2;

  return isMinGreater && isMaxLesser;
}

// Deve retornar true
console.log(canNest([1, 2, 3, 4], [0, 6]));

// Deve retornar true
console.log(canNest([3, 1], [4, 0]));

// Deve retornar false
console.log(canNest([9, 9, 8], [8, 9]));

// Deve retornar false
console.log(canNest([1, 2, 3, 4], [2, 3]));
