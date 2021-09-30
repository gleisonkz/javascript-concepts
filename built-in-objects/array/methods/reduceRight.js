{
  /* Array.Prototype.reduceRight

reduzir uma coleção de itens a um único valor começando pelo final do array.*/

  function reverse(string) {
    return [...string].reduceRight((acc, cur) => `${acc}${cur}`, "");
  }

  const result = reverse("Está frase ficará ao contrário");
  console.log(result);
}
