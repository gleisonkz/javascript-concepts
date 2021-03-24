{
  /* String.Prototype.match

aplica uma expressão regular e retorna as correspondências como um array.*/

  const message = "The rain in SPAIN plain";
  let result = message.match(/ain/g);
  console.log(result);

  result = message.match("rain");
  console.log(result);

  result = message.match(/[A-Z]/g);
  console.log(result);

  result = message.match(/u/g);
  console.log(result);
}
