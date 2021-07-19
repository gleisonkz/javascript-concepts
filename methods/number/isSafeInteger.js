{
  /*
      Number.isSafeInteger
            
      método estático que
      verifica se o valor 
      passado é um número inteiro seguro.
    
      */

  console.log(Number.isSafeInteger(3));
  console.log(Number.isSafeInteger(Math.pow(2, 53)));
  console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));
  console.log(Number.isSafeInteger(NaN));
  console.log(Number.isSafeInteger(Infinity));
  console.log(Number.isSafeInteger("3"));
  console.log(Number.isSafeInteger(3.1));
  console.log(Number.isSafeInteger(3.0));
}
