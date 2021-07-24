/*

Kata Nível 8 kyu - Returning Strings

Faça uma função que retornará uma declaração de saudação 
que usa uma entrada; seu programa deve retornar, 

"Hello, <name> how are you doing today?". 

[Certifique-se de digitar exatamente o que escrevi ou 
o programa pode não ser executado corretamente]

*/

const greet = (name) => {
  return `Hello, ${name} how are you doing today?`;
};

{
  // Teste 1 deve retornar "Hello, Ryan how are you doing today?"
  const name = "Ryan";
  console.log(greet(name));
  console.log(assert(name, "Hello, Ryan how are you doing today?"));
}
{
  // Teste 2 deve retornar "Hello, Shingles how are you doing today?"
  const name = "Shingles";
  console.log(greet(name));
  console.log(assert(name, "Hello, Shingles how are you doing today?"));
}

function assert(name, expected) {
  const resultFn = greet(name);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
