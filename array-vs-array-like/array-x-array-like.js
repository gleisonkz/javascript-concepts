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
  function indexAccessExample() {
    console.log(arguments[0]);
    console.log(letters[0]);
  }
  indexAccessExample("a", "b", "c");
}

{
  // Ambos são objetos
  const letters = ["d", "e", "f"];
  function typeOfExample() {
    console.log(typeof letters);
    console.log(typeof arguments);
  }
  typeOfExample("a", "b", "c");
}

// Diferenças

{
  // Array-Like não é um array
  const letters = ["d", "e", "f"];
  function isArrayExample() {
    console.log(Array.isArray(letters));
    console.log(Array.isArray(arguments));
  }
  isArrayExample("a", "b", "c");
}

{
  // alterar o valor da propriedade length
  // de um array like não tem qualquer efeito sobre seus itens
  const letters = ["d", "e", "f"];
  function changeLengthExample() {
    letters.length = 0;
    arguments.length = 0;
    console.log(letters.length);
    console.log(arguments.length);
    console.log(letters[1]);
    console.log(arguments[1]);
  }
  changeLengthExample("a", "b", "c");
}

{
  // Adicionar ou remover itens em um array-like
  //não altera o valor da propriedade length

  const letters = ["d", "e", "f"];
  function addItensExample() {
    letters[3] = "g";
    arguments[4] = "e";
    console.log(letters.length);
    console.log(arguments.length);
  }
  addItensExample("a", "b", "c");
}

{
  // Um array-Like não tem acesso aos métodos de instância de array

  const letters = ["d", "e", "f"];
  function foo() {
    console.log(letters.join(""));
    console.log(arguments.join(""));
  }
  foo("a", "b", "c");
}
