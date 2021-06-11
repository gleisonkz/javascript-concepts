{
  /* String.Prototype.lastIndexOf

retorna a índice da última ocorrência de um valor ou parte dele em uma string.*/

  const message = "Hello planet earth, you are a great planet.";
  let result = message.lastIndexOf("planet");
  console.log(result);

  result = message.lastIndexOf("planet", 11);
  console.log(result);

  result = message.lastIndexOf("planet", 5);
  console.log(result);
}
