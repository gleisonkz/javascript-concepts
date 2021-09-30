{
  /* Array.Prototype.flatMap

  retorna um novo array, executando uma função de callback 
  para cada elemento do array e então 'planificando' 
  o resultado em 1 nível.

  por padrão o nível de profundidade é 1
*/

  const sentences = [
    "JavaScript Array flatMap()",
    " ",
    "is",
    " ",
    "Awesome",
    "Wonderful",
  ];

  let words = sentences.map((s) => s.split(" "));
  let flattenWords = sentences.flatMap((s) => s.split(" "));
  console.log(words);
  console.log(flattenWords);

  const people = [
    { name: "João", friends: [{ name: "Gabriel" }, { name: "Laura" }] },
    { name: "Maria", friends: [{ name: "Bruna" }, { name: "Luzia" }] },
    { name: "Rebeca", friends: [{ name: "Gustavo" }] },
  ];

  const allFriends = people.flatMap((c) => c.friends);
  console.log(allFriends);
}
