/*
Implemente a função abaixo para aceitar 
um número dinâmico de parâmetros dos tipos: number, string e boolean.
e retorne o parâmetros concatenados como um hífen.

caso seja passado algum parâmetro que não seja dos tipos mencionados retorne undefined
*/

function magicFunction(...args) {
  const isInvalidFn = (value) =>
    !["number", "string", "boolean"].includes(typeof value);

  const hasInvalid = args.some(isInvalidFn);
  return hasInvalid ? undefined : args.join("-");
}

{
  // Teste 1 deve retornar "1-2-3-4-5-6-7-8-9-10"
  const expected = "1-2-3-4-5-6-7-8-9-10";
  const result = magicFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(result);
  console.log(result === expected);
}
{
  // Teste 2 deve retornar "a-2-b-4-c-false"
  const expected = "a-2-b-4-c-false";
  const result = magicFunction("a", 2, "b", 4, "c", false);
  console.log(result);
  console.log(result === expected);
}
{
  // Teste 3 deve retornar undefined
  const expected = undefined;
  const result = magicFunction({});
  console.log(result);
  console.log(result === expected);
}
{
  // Teste 4 deve retornar undefined
  const expected = undefined;
  const result = magicFunction([1, 2, 3], {}, null, undefined);
  console.log(result);
  console.log(result === expected);
}
{
  // Teste 5 deve retornar undefined
  const expected = undefined;
  const result = magicFunction(null);
  console.log(result);
  console.log(result === expected);
}
{
  // Teste 6 deve retornar undefined
  const expected = undefined;
  const result = magicFunction("a", 3, {}, null, undefined);
  console.log(result);
  console.log(result === expected);
}
