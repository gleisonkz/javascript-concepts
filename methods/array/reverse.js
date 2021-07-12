/* Array.prototype.reverse

inverte a ordem dos elementos de 
um array e retorna a referencia 
para o mesmo array
*/
{
  const positions = ["one", "two", "three"];
  console.log(positions);
  const reversed = positions.reverse();
  console.log(reversed);

  // Cuidado : a reversão é aplicada ao array original
  console.log(positions);
}
{
  // Invertendo os elementos de array-like object
  const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
  console.log(arrayLike);
  Array.prototype.reverse.call(arrayLike);
  console.log(arrayLike);
}
