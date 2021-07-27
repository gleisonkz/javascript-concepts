/*

Kata Nível 8 kyu - Grasshopper - Personalized Message

Crie uma função que forneça uma saudação personalizada. 
Esta função leva dois parâmetros: name and owner. 
Use condicionais para retornar a mensagem adequada:

- Caso o name seja igual ao owner retorne -> 'Hello boss'
- Caso contrário retorne -> 'Hello guest'
*/

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

function greet2(name, owner) {
  return `Hello ${name === owner ? "boss" : "guest"}`;
}

function greet3(name, owner) {
  const greetings = ["Hello guest", "Hello boss"];
  return greetings[name === owner];
}

{
  // Teste 1 deve retornar 'Hello boss'
  const [name, owner] = ["Daniel", "Daniel"];
  console.log(greet(name, owner));
  console.log(assert(name, owner, "Hello boss"));
}
{
  // Teste 2 deve retornar 'Hello guest'
  const [name, owner] = ["Greg", "Daniel"];
  console.log(greet(name, owner));
  console.log(assert(name, owner, "Hello guest"));
}

function assert(name, owner, expected) {
  return greet(name, owner) === expected ? "OK" : "Algo deu errado";
}
