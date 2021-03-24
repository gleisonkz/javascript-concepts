{
  /* String.Prototype.includes

verifica se uma string contém todos os caracteres de uma string especificada.*/

  const message = "Hello world, welcome to the universe.";
  let result = message.includes("world");
  console.log(result);

  result = message.includes("w");
  console.log(result);

  result = message.includes("world", 10);
  console.log(result);
}
