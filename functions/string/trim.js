{
  /* String.Prototype.trim

retorna uma nova string removendo os espaços em branco do início e final.*/

  const names = ["  Richard    ", "Hi There  "];
  const trimmedNames = names.map((name) => name.trim());
  console.log(trimmedNames);
}
