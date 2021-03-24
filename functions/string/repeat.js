{
  /* String.Prototype.repeat

retorna uma nova string com um número especificado de cópias da string passado no parâmetro da chamada.*/

  const message = "Hello world!";

  let result = message.repeat(2);
  console.log(result);

  result = message.repeat(0);
  console.log(result);
}
