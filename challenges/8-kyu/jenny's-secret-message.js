/*

Kata Nível 8 kyu - Jenny's secret message?

Jenny escreveu uma função que retorna uma saudação para um usuário. 
No entanto, ela está apaixonada por Johnny e gostaria de cumprimentá-lo um pouco diferente. 

Ela acrescentou um caso especial à sua função, mas cometeu um erro.

Você pode ajudá-la?
*/

function greet(name) {
  return name === "Johnny" ? `Hello, my love!` : `Hello, ${name}!`;
}

{
  // Teste 1 deve retornar Hello, Jim!
  const sample = "Jim";
  const expected = "Hello, Jim!";
  console.log(greet(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar "Hello, Jane!"
  const sample = "Jane";
  const expected = "Hello, Jane!";
  console.log(greet(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar "Hello, Simon!"
  const sample = "Simon";
  const expected = "Hello, Simon!";
  console.log(greet(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 4 deve retornar "Hello, my love!"
  const sample = "Johnny";
  const expected = "Hello, my love!";
  console.log(greet(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = greet(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
