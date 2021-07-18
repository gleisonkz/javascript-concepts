const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const ages = people.reduce((groupedPeople, person) => {
  const ageNotExists = () => age in groupedPeople === false;
  const age = person.age;

  if (ageNotExists()) groupedPeople[age] = [];
  groupedPeople[age].push(person);

  return groupedPeople;
}, {});

console.log(ages);
