{
  /* String.Prototype.search

retorna a posição de um valor específico via expressão regular.*/

  const message = "Mr. Blue has a blue house";

  let result = message.search("Blue");
  console.log(result);

  result = message.search("Hi");
  console.log(result);

  result = message.search(/blue/g);
  console.log(result);
}
