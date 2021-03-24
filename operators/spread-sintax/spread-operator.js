{
  const evenNumbers = [0, 2, 4, 6];
  const oddNumbers = [1, 3, 5, 7];
  const allNumbers = [...evenNumbers, ...oddNumbers];
  console.log(allNumbers);

  let person = { name: "John", age: 18 };
  person = { ...person, height: 1.75 };
  console.log(person);

  console.log([..."ABCDE"]);
}
