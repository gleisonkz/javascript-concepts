{
  /* Array.Prototype.entries
  
    retorna um iterator object que contem um 
    key/value pair para cada índice do array 
*/

  {
    // exibindo os key/value pairs
    const letters = ["a", "b", "c"];
    const iterator = letters.entries();

    console.log(iterator);

    for (let e of iterator) {
      console.log(e);
    }
  }

  {
    // Iterando com índice e elemento
    const letters = ["a", "b", "c"];

    for (const [index, element] of letters.entries())
      console.log(index, element);
  }
}
