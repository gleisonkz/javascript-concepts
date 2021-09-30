{
  /*
    Number.prototype.toPrecision
          
    retorna uma string que representa 
    o objeto Number com uma precisão especificada.
  */

  let numObj = 5.123456;

  console.log(numObj.toPrecision());
  console.log(numObj.toPrecision(5));
  console.log(numObj.toPrecision(2));
  console.log(numObj.toPrecision(1));

  numObj = 0.000123;

  console.log(numObj.toPrecision());
  console.log(numObj.toPrecision(5));
  console.log(numObj.toPrecision(2));
  console.log(numObj.toPrecision(1));
}
