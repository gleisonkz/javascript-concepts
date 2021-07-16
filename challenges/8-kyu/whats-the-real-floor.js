/*
Kata Nível 8 kyu - What's the real floor?

Os americanos são pessoas estranhas: em seus prédios, o primeiro andar é na verdade 
o térreo e não há o 13º andar (por superstição).

Escreva uma função que dado um determinado andar no sistema americano 
retorna o andar correspondente no sistema europeu.

Com a substituição do 1º andar pelo térreo e a retirada do 13º andar, 
os números descem para ocupar o seu lugar. No caso de acima de 13, 
eles se movem dois para baixo porque há dois números omitidos abaixo deles.

Os porões (negativos) permanecem iguais ao nível universal.

Exemplos:

1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

*/

function getRealFloor(floor) {
  if (floor <= 0) return floor;
  return floor - (floor > 13 ? 2 : 1);
}

// Teste 1 deve retornar 0
let sample = 1;
console.log(getRealFloor(sample));
console.log(assert(sample, 0));

// Teste 2 deve retornar 0
sample = 0;
console.log(getRealFloor(sample));
console.log(assert(sample, 0));

// Teste 3 deve retornar 4
sample = 5;
console.log(getRealFloor(sample));
console.log(assert(sample, 4));

// Teste 4 deve retornar 13
sample = 15;
console.log(getRealFloor(sample));
console.log(assert(sample, 13));

// Teste 5 deve retornar -3
sample = -3;
console.log(getRealFloor(sample));
console.log(assert(sample, -3));

function assert(sample, expected) {
  return getRealFloor(sample) === expected ? "OK" : "Algo deu errado";
}
