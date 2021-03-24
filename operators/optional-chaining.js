{
  const adventurer = {
    name: "Alice",
    cat: {
      name: "Dinah",
    },
  };

  const dogName = adventurer?.dog?.name;
  dogName;

  const otherAnimal = adventurer.duck.name;
}
