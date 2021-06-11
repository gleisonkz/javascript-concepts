/* Array.Prototype.slice

extrai e retorna uma parte de uma array, sem modificar o array original
obs: índice final não é incluído
*/

{
  const letters = ["A", "B", "C", "D"];
  const splittedLetters = letters.slice(1, 3);
  console.log(letters);
  console.log(splittedLetters);
}

{
  const months = ["Jan", "March", "April"];
  const days = ["Monday", "Tuesday", "Wednesday"];

  const removedMonths = months.slice(1, 0);
  const removedDays = days.slice(3, 2);

  console.log(removedMonths);
  console.log(removedDays);
}
