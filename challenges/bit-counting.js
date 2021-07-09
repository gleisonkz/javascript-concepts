/*

Escreva uma função que recebe um inteiro como entrada 
e retorna o número de bits que são iguais a 1 na representação binária desse número. 
Você pode garantir que a entrada não é negativa.

Exemplo: a representação binária de 1234 é 10011010010, 
portanto, a função deve retornar 5 neste caso

*/

function countBits(num) {
  const integerToBinary = (num) => num.toString(2);
  const binaryString = integerToBinary(num);
  return binaryString.split("").filter((c) => c == 1).length;
}

function countBitsV2(num) {
  const integerToBinary = (num) => num.toString(2);
  const binaryString = integerToBinary(num);
  return binaryString.split("0").join("").length;
}

// Teste 1 deve retornar 0;
console.log(countBits(0));
console.log(countBits(0) === 0);

// Teste 2 deve retornar 1;
console.log(countBits(4));
console.log(countBits(4) === 1);

// Teste 3 deve retornar 3;
console.log(countBits(7));
console.log(countBits(7) === 3);

// Teste 4 deve retornar 2;
console.log(countBits(9));
console.log(countBits(9) === 2);

// Teste 5 deve retornar 2;
console.log(countBits(10));
console.log(countBits(10) === 2);
