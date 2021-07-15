/*

Seu objetivo neste desafio é implementar uma função de diferença, 
que subtrai um array da outro e retorna o resultado. 

A função deve remover todos os valores da array A, que estão presentes 
no array B mantendo sua ordem.

intersect([1,2],[1]) == [2]

Se um valor estiver presente no array B, todas as 
suas ocorrências no array A devem ser removidas:

intersect([1,2,2,2,3],[2]) == [1,3]

*/

function intersect(arrayA, arrayB) {
  return arrayA.filter((itemA) => !arrayB.includes(itemA));
}

// Teste 1 deve retornar [2];
console.log(intersect([1, 2], [1]));

// Teste 2 deve retornar [];
console.log(intersect([], [4, 5]));

// Teste 3 deve retornar [4];
console.log(intersect([3, 4], [3]));

// Teste 4 deve retornar [3];
console.log(intersect([1, 2, 3], [1, 2]));

// Teste 5 deve retornar [ 2, 2 ];
console.log(intersect([1, 2, 2], [1]));

// Teste 6 deve retornar [1,3];
console.log(intersect([1, 2, 2, 2, 3], [2]));

// Teste 7 deve retornar [1];
console.log(intersect([1, 0, 0], [0]));

// Teste 8 deve retornar [5, 14, -19, -9, 13];
console.log(
  intersect(
    [5, -15, 14, -19, -16, -9, 15, -15, 20, 16, -18, 13],
    [-15, -16, 15, 16, -15, -18, 20]
  )
);
