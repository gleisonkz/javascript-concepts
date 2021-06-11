ObjectDefineProperty: {
  const obj = { name: "John", age: 13 };

  // Usando o método defineProperty
  Object.defineProperty(obj, "hiddenNumber", { enumerable: false, value: 25 });
  // Ou criando um Symbol
  const key = Symbol("hiddenNumber2");
  obj[key] = 14;

  console.log(Object.keys(obj));
  console.log(JSON.stringify(obj));

  Answer: {
    Object.defineProperty(obj, "hiddenNumber", { enumerable: false, value: 25 });
    // OU
    const key = Symbol("hiddenNumber2");
    obj[key] = 14;
  }
}
