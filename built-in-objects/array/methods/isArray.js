{
  /* Array.isArray

  verifica se um objeto é um array.
*/

  const numbers = [1, 2, 3];
  const number = 2;
  const name = "John";
  const person = { name: "John", age: 32 };

  console.log(Array.isArray(numbers));
  console.log(Array.isArray(number));
  console.log(Array.isArray(name));
  console.log(Array.isArray(person));

  function foo() {
    console.log(Array.isArray(arguments));
  }

  foo();
}
