/*

Escreva um algoritmo que pegue uma matriz 
e mova todos os zeros até o final, 
preservando a ordem dos outros elementos.

*/

function moveZeros(array) {
  const zeros = array.filter((item) => item === 0);
  const withoutZeros = array.filter((item) => item !== 0);
  return [...withoutZeros, ...zeros];
}

function moveZeros2(array) {
  return array.sort((_, a) => (a === 0 ? -1 : 0));
}

function moveZeros3(array) {
  return array.reverse().reduce((acc, value) => {
    return value === 0 ? acc.push(value) : acc.unshift(value), acc;
  }, []);
}

// Teste 1 deve retornar [false,1,1,2,1,3,"a",0,0]
let result = moveZeros3([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(result);

// Teste 2 deve retornar [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
result = moveZeros3([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
console.log(result);
