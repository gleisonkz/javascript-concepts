{
  /* Array.Prototype.flat

  utilizado para deixar um array plano recursivamente
  em uma profundidade especificada como argumento.

  por padrão o nível de profundidade é 1
*/

  const arr1 = [0, 1, 2, [3, 4]];

  console.log(arr1.flat());

  const arr2 = [0, 1, 2, [[4, 5, 6]]];

  console.log(arr2.flat());

  console.log(arr2.flat(2));
}
