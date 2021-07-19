{
  /*
  Number.isNaN
          
  método estático que
  verifica se o valor 
  passado como argumento é NaN e do tipo Number
  
  */

  console.log(Number.isNaN(NaN));
  console.log(Number.isNaN(Number.NaN));
  console.log(Number.isNaN(0 / 0));

  console.log(Number.isNaN("NaN"));
  console.log(Number.isNaN(undefined));
  console.log(Number.isNaN({}));
  console.log(Number.isNaN("hello"));
  console.log(Number.isNaN(true));
  console.log(Number.isNaN(null));
  console.log(Number.isNaN(37));
  console.log(Number.isNaN("37"));
  console.log(Number.isNaN("37.37"));
  console.log(Number.isNaN(""));
  console.log(Number.isNaN(" "));
}
