{
  /* Array.lastIndexOf

  retorna o último índice de um determinado
  elemento em um array, ou -1 se não estiver presente.
*/

  const beasts = ["ant", "bison", "camel", "duck", "bison"];

  // retornando o último item encontrado
  console.log(beasts.lastIndexOf("bison"));

  // passando um índice inicial da busca
  console.log(beasts.lastIndexOf("bison", 2));

  // quando um item não é encontrado
  console.log(beasts.lastIndexOf("giraffe"));
}
