// Comparações entre um Array e um Array-Like Object

// Array Like o que é
// é um objeto que possui a propriedade length e propriedades indexadas

const arrayLike = { 0: "foo", 1: "bar", length: 2 };
console.log(Array.from(arrayLike));
console.log(Array.prototype.slice.call(arrayLike));

// Semelhanças
{
  // Possuem o mesmo getter para a propriedade length
  const letters = ["d", "e", "f"];
  function lengthExample() {
    console.log(arguments.length);
    console.log(letters.length);
  }
  lengthExample("a", "b", "c");
}
{
  // Possuem o mesmo getter para a índices
  const letters = ["d", "e", "f"];
  function indexExample() {
    console.log(arguments[0]);
    console.log(letters[0]);
  }
  indexExample("a", "b", "c");
}

{
  // Ambos são objetos
  const letters = ["d", "e", "f"];
  function indexExample() {
    console.log(typeof letters);
    console.log(typeof arguments);
  }
  indexExample("a", "b", "c");
}

// Diferenças

{
  // Array-Like não é um array
  const letters = ["d", "e", "f"];
  function indexExample() {
    console.log(Array.isArray(letters));
    console.log(Array.isArray(arguments));
  }
  indexExample("a", "b", "c");
}

{
  // Não é possível atribuir um valor para a propriedade length
  // de um array like
  const letters = ["d", "e", "f"];
  function indexExample() {
    letters.length = 0;
    arguments.length = 0;
    console.log(letters[1]);
    console.log(arguments[1]);
  }
  indexExample("a", "b", "c");
}

{
  // a propriedade length de um Array-Like
  //geralmente não é atualizada automaticamente

  const letters = ["d", "e", "f"];
  function foo() {
    letters[3] = "g";
    arguments[4] = "e";
    console.log(letters.length);
    console.log(arguments.length);
  }
  foo("a", "b", "c");
}

{
  // Array-Like não tem acesso aos métodos de instância de array

  const letters = ["d", "e", "f"];
  function foo() {
    console.log(letters.join(""));
    console.log(arguments.join(""));
  }
  foo("a", "b", "c");
}
