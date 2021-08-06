{
  const str = "Hello";
  console.log(str.length);

  // A tentativa de atribuir um valor à propriedade .length
  // de uma string não tem nenhum efeito.

  const myString = "bluebells";
  myString.length = 4;
  console.log(myString);
  console.log(myString.length);
}
