/*

Kata Nível 8 kyu - Get the mean of an array

É o fim do ano letivo, momento fatídico do seu boletim escolar. 
As médias devem ser calculadas. Todos os alunos vêm até você 
e imploram para que você calcule a média deles. Fácil ! 
Você só precisa escrever um script.

Retorne a média da array fornecido arredondada 
para o número inteiro mais próximo.

O array nunca estará vazio.
*/

function getAverage(marks) {
  const marksSum = marks.reduce((total, mark) => (total += mark), 0);
  return Math.floor(marksSum / marks.length);
}

{
  // Teste 1 deve retornar 2
  const sample = [2, 2, 2, 2];
  console.log(getAverage(sample));
  console.log(assert(sample, 2));
}
{
  // Teste 2 deve retornar 3
  const sample = [1, 2, 3, 4, 5];
  console.log(getAverage(sample));
  console.log(assert(sample, 3));
}
{
  // Teste 3 deve retornar 1
  const sample = [1, 1, 1, 1, 1, 1, 1, 2];
  console.log(getAverage(sample));
  console.log(assert(sample, 1));
}

function assert(sample, expected) {
  const resultFn = getAverage(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
