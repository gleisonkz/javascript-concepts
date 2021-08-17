{
  /* String.Prototype.[Symbol.iterator]
  
  retorna um novo iterator object que itera sobre
  os caracteres de uma string.

  */
  // Exemplos

  const str = "abc";
  const iterator = str[Symbol.iterator]();

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}
