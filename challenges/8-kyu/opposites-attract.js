/*

Kata Nível 8 kyu - Opposites Attract

Timmy e Sarah acham que estão apaixonados, mas perto de onde moram,
eles só saberão quando colherem uma flor cada um. 

Se uma das flores tem um número par de pétalas 
e a outra tem um número ímpar de pétalas, 
isso significa que eles estão apaixonados.

Escreva uma função que pegará o número de pétalas de cada flor 
e retornará verdadeiro se eles estiverem apaixonados 
e falso se não estiverem.

*/

function isInLove(flower1, flower2) {
  const isEven = (num) => num % 2 === 0;
  return isEven(flower1) !== isEven(flower2);
}

{
  // Teste 1 deve retornar true
  const [flower1, flower2] = [1, 4];
  console.log(isInLove(flower1, flower2));
  console.log(assert(flower1, flower2, true));
}

{
  // Teste 2 deve retornar false
  const [flower1, flower2] = [2, 2];
  console.log(isInLove(flower1, flower2));
  console.log(assert(flower1, flower2, false));
}

{
  // Teste 3 deve retornar true
  const [flower1, flower2] = [0, 1];
  console.log(isInLove(flower1, flower2));
  console.log(assert(flower1, flower2, true));
}

{
  // Teste 4 deve retornar false
  const [flower1, flower2] = [0, 0];
  console.log(isInLove(flower1, flower2));
  console.log(assert(flower1, flower2, false));
}

function assert(flower1, flower2, expected) {
  return isInLove(flower1, flower2) === expected ? "OK" : "Algo deu errado";
}
