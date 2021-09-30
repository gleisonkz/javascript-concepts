{
  /*
    Number.prototype.toExponential
          
    retorna uma string com a representação 
    da notação exponencial de um number.  
  */

  const age = 25;
  const weight = 80.87;

  console.log(age.toExponential());
  console.log(age.toExponential(4));
  console.log(age.toExponential(2));

  console.log(weight.toExponential());
  console.log(weight.toExponential());
}
