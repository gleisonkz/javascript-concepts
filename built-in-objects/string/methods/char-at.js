{
  /* String.Prototype.charAt

  retorna o carácter de um determinado índice.
  */

  const message = "HELLO WORLD";
  const letter = message.charAt(message.length - 1);
  const result = `The last letter is : ${letter}`;
  console.log(result);
}
{
  // utilizando charAt para capitalizar
  // a primeira letra de uma palavra

  const msg = "hello";
  const capitalizedMsg = `${msg.charAt(0).toUpperCase()}${msg.slice(1)}`;
  console.log(capitalizedMsg);
}
{
  // utilizando charAt para capitalizar
  // recuperar a última letra palavra

  const message = "HELLO WORLD";
  const letter = message.charAt(message.length - 1);
  const result = `The last letter is : ${letter}`;
  console.log(result);
}
