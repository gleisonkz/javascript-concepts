forOfStatement: {
  const numbers = [10, 20, 30];
  const letters = ["a", "b", "c"];
  const objects = [{ name: "a" }, { name: "b" }, { name: "c" }];

  for (const number of numbers) {
    console.log(number);
  }

  for (const letter of letters) {
    console.log(letter);
  }

  for (const object of objects) {
    console.log(object);
  }
}

forOfStatementInObjectProperties: {
  const person = {
    name: "John",
    age: 32,
    height: 2.32,
  };

  for (const current of person) {
    console.log(current);
  }
}
