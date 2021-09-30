{
  /*
  Number.isFinite
        
  método estático que
  verifica se um número
  é diferente de Infinity, -Infinity e NaN

  */

  const operation1 = 1 / 0;
  console.log(operation1);
  console.log(Number.isFinite(operation1));

  const operation2 = 10 / 5;
  console.log(operation2);
  console.log(Number.isFinite(operation2));

  const operation3 = 0 / 0;
  console.log(operation3);
  console.log(Number.isFinite(operation3));

  const operation4 = -1 / 0;
  console.log(operation4);
  console.log(Number.isFinite(operation4));

  console.log(Number.isFinite("0"));
}
