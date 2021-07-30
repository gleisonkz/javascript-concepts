{
  /*
      Number.prototype.toString
            
      retorna uma string que representa o 
      objeto Number conforme a base especificada.
  */

  const count = 10;

  console.log(count.toString());
  console.log(typeof count.toString());

  console.log((17).toString());
  console.log(typeof (17).toString());

  console.log((17.2).toString());
  console.log(typeof (17.2).toString());

  const x = 6;

  console.log(x.toString(2));
  console.log(typeof x.toString(2));

  console.log((254).toString(16));
  console.log(typeof (254).toString(16));

  console.log((-10).toString(2));
  console.log(typeof (-10).toString(2));

  console.log((-0xff).toString(2));
  console.log(typeof (-0xff).toString(2));
}
