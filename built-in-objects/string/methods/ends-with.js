{
  /* String.Prototype.endsWith

verifica se uma string termina com os caracteres de uma string especificada.*/

  const message = "Hello world, welcome to the universe.";
  let result = message.endsWith("universe.");
  console.log(result);
  result = message.endsWith("world", 11);
  console.log(result);
  result = message.endsWith("world");
  console.log(result);
}
