{
  /* Array.Prototype.filter

retorna um novo array com todos os elementos que atenderem a condição passada.*/

  const words = ["spray", "limit", "elite", "destruction", "presentation"];
  const filteredWords = words.filter((word) => word.length > 5);
  console.log(filteredWords);
}
