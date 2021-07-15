/*

Escreva uma função que recebe um inteiro como entrada 
e retorna a representação desse número em binário. 

a conversão deve ser realizada de forma 'manual' ou seja não é permitido
utilizar métodos nativos da linguagem para fazer a conversão.

Exemplo: para o número 1234 deve ser retornado o número 10011010010, 
*/

function integerToBitRecursive(num) {
  const binary = [];

  const divisionRecursively = (num) => {
    const reminder = num % 2;
    const division = num / 2;
    binary.push(reminder);
    if (num < 2) return 1;
    return divisionRecursively(Math.trunc(division));
  };
  divisionRecursively(num);
  return +binary.reverse().join("");
}

function integerToBit(number) {
  let binary = "";
  while (number > 0) {
    const reminder = number % 2;
    binary = reminder + binary;
    number = Math.floor(number / 2);
  }
  return +binary;
}

// Teste 1 deve retornar 11001;
console.log(integerToBit(25));
console.log(integerToBit(25) === 11001);

// Teste 2 deve retornar 11100001;
console.log(integerToBit(225));
console.log(integerToBit(225) === 11100001);

// Teste 3 deve retornar 0;
console.log(integerToBit(0));
console.log(integerToBit(0) === 0);

// Teste 4 deve retornar 1011111;
console.log(integerToBit(95));
console.log(integerToBit(95) === 1011111);

// Teste 5 deve retornar 10011010010;
console.log(integerToBit(1234));
console.log(integerToBit(1234) === 10011010010);
