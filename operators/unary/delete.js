// Unary delete operator
// remove uma propriedade de um objeto
// caso a mesma não seja uma Non-configurable property

{
  const employee = {
    firstName: "John",
    lastName: "Doe",
  };

  console.log(employee.firstName);
  console.log(delete employee.firstName);

  // Caso tente deletar uma propriedade que não existe
  // também será retornado true
  console.log(delete employee.UnknownProperty);
  console.log(employee);
}

{
  /* Quando uma propriedade é marcada como não configurável, 
   a exclusão não terá nenhum efeito e retornará falso. 
   No strict mode, isso gerará um TypeError. */

  let car = {};
  Object.defineProperty(car, "color", { configurable: false, value: "red" });
  console.log(delete car.color);
  console.log(car.color);

  // também não é possível deletar variáveis  declaradas com
  // var, let ou const ou algo que não seja uma propriedade

  const name = "Hello";
  function foo(){}
  console.log(delete name)
  console.log(delete foo)
}

{
  /* Quando você exclui um elemento de um array,
    o length do array não é afetado. 
   */
  const trees = ["redwood", "bay"];
  delete trees[1];
  console.log(trees);
  console.log(trees.length);
}
