{
  /* Array.from

  método estático que cria um array a partir 
  de um array-like ou iterable object.
*/

  // gerando um array a partir de uma string
  console.log(Array.from("foo"));

  // gerando um array a partir de um set
  const set = new Set(["foo", "bar", "baz", "foo"]);
  console.log(Array.from(set));

  // gerando um array a partir array-like (arguments)
  function createArray() {
    return Array.from(arguments);
  }
  console.log(createArray(1, 2, 3));

  // criando um array e projetando

  console.log(Array.from([1, 2, 3], (x) => x + x));
}
