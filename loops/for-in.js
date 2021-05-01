forInStatement: {
  const numbers = [10, 20, 30];
  const letters = ["a", "b", "c"];
  const objects = [{ name: "a" }, { name: "b" }, { name: "c" }];

  for (const number in numbers) {
    console.log(number);
  }

  for (const letter in letters) {
    console.log(letter);
  }

  for (const object in objects) {
    console.log(object);
  }
}
