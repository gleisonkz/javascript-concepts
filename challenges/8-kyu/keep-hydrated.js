/*

Kata Nível 8 kyu - Keep Hydrated!

Nathan adora andar de bicicleta.

Porque Nathan sabe que é importante se manter hidratado, 
ele bebe 0,5 litro de água por hora de ciclismo.

Você recebe o tempo em horas e precisa devolver 
o número de litros que Nathan beberá, 
arredondado para o menor valor.

Por exemplo:

time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

*/

function litres(time) {
  return ~~(time * 0.5);
}

{
  // Teste 1 deve retornar 1
  const time = 2;
  console.log(litres(time));
  console.log(assert(time, 1));
}

{
  // Teste 2 deve retornar 0
  const time = 1.4;
  console.log(litres(time));
  console.log(assert(time, 0));
}

{
  // Teste 3 deve retornar 6
  const time = 12.3;
  console.log(litres(time));
  console.log(assert(time, 6));
}

{
  // Teste 4 deve retornar 0
  const time = 0.82;
  console.log(litres(time));
  console.log(assert(time, 0));
}

{
  // Teste 5 deve retornar 5
  const time = 11.8;
  console.log(litres(time));
  console.log(assert(time, 5));
}

{
  // Teste 6 deve retornar 893
  const time = 1787;
  console.log(litres(time));
  console.log(assert(time, 893));
}

{
  // Teste 7 deve retornar 0
  const time = 0;
  console.log(litres(time));
  console.log(assert(time, 0));
}

function assert(time, expected) {
  return litres(time) === expected ? "OK" : "Algo deu errado";
}
