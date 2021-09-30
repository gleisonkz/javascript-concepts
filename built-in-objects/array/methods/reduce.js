{
  /* Array.Prototype.reduce

  reduzir uma coleção de itens a um único valor.*/

  const persons = [
    { name: "John Doe", earthShape: "Flat", QI: -320 },
    { name: "Jane Doe", earthShape: "Flat", QI: -718 },
    { name: "Mark Richard", earthShape: "Round", QI: -500 },
    { name: "Paul Phillips", earthShape: "Round", QI: 15 },
  ];
  const maxQi = persons.reduce((obj, item) => {
    return obj.QI > item.QI ? obj : item;
  });
  console.log(maxQi);
}
