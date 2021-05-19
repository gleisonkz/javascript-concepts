let person = {};
Object.defineProperty(person, "firstName", {
  configurable: false,
  value: "John",
});

console.log(person.firstName);
