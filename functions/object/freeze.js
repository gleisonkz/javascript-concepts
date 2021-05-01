ObjectPrototypeFreeze: {
  const people = {
    name: "Roger",
    age: 42,
  };

  Object.freeze(people);

  people.age = 33; // Lança uma exceção caso esteja no strict mode
  console.log(people.age);

  delete people.name; // Lança uma exceção caso esteja no strict mode
  console.log(people.name);

  people["address"] = "Street 25"; // Lança uma exceção caso esteja no strict mode
  console.log(people.address);
}
ObjectPrototypeFreeze_Question: {
  const people = {
    name: "Roger",
    age: 42,
    address: {
      street: "Coolest Street",
      number: 27,
    },
  };

  Object.freeze(people);

  people.address.number = 50;
  console.log(people.address.number);
}
