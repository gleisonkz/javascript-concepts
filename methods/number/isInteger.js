{
  /*
    Number.isInteger
          
    método estático que
    verifica se o valor 
    passado é um número inteiro.
  
    */

  console.log(Number.isInteger(0));
  console.log(Number.isInteger(1));
  console.log(Number.isInteger(-100000));
  console.log(Number.isInteger(99999999999999999999999));
  console.log(Number.isInteger(0.1));
  console.log(Number.isInteger(Math.PI));
  console.log(Number.isInteger(NaN));
  console.log(Number.isInteger(Infinity));
  console.log(Number.isInteger(-Infinity));
  console.log(Number.isInteger("10"));
  console.log(Number.isInteger(true));
  console.log(Number.isInteger(false));
  console.log(Number.isInteger([1]));
  console.log(Number.isInteger(5.0));
  console.log(Number.isInteger(5.000000000000001));
  console.log(Number.isInteger(5.00000000000000001));
}
