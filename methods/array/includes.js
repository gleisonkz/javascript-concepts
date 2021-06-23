{
  /* Array.includes

  verifica se um array possui 
  um determinado valor entre seus itens.
*/

  const numbers = [1, 2, 3];

  console.log(numbers.includes(2));

  const pets = ["cat", "dog", "bat"];

  console.log(pets.includes("cat"));
  console.log(pets.includes("at"));

  /*Se o índice inicial for maior ou 
   igual ao comprimento da array,
   será retornado falso. E o array não será pesquisado.
   */

  const letters = ["a", "b", "c"];
  console.log(letters.includes("c", 3));
  console.log(letters.includes("c", 100));
}
