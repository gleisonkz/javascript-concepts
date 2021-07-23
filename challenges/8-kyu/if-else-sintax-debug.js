/*

Kata Nível 8 kyu - If/else syntax debug

Ao fazer um jogo, seu parceiro, Greg, decidiu criar 
uma função para verificar se o usuário ainda está vivo
chamada checkAlive / CheckAlive / check_alive. 

Infelizmente, Greg cometeu alguns erros ao criar a função.

checkAlive  

deve retornar verdadeiro se a saúde do jogador 
for maior que 0 ou falso se for 0 ou menor.

A função recebe um parâmetro de health (saúde)
que sempre será um número inteiro entre -10 e 10.
*/

const checkAlive = (health) => {
  return health > 0;
};

{
  // Teste 1 deve retornar true
  const sample = 5;
  console.log(checkAlive(sample));
  console.log(assert(sample, true));
}
{
  // Teste 2 deve retornar false
  const sample = 0;
  console.log(checkAlive(sample));
  console.log(assert(sample, false));
}

function assert(sample, expected) {
  const resultFn = checkAlive(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
