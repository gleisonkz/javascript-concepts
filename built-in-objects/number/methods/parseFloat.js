{
  /*
  Number.par
        
  método estático que
  tenta converter um valor para float, 
  caso não consiga retornar NaN.

  */

  console.log(parseFloat === Number.parseFloat);

  const sample1 = 5;
  console.log(sample1);
  console.log(Number.parseFloat(sample1));
  console.log(parseFloat(sample1));

  const sample2 = "1";
  console.log(sample2);
  console.log(Number.parseFloat(sample2));
  console.log(parseFloat(sample2));

  const sample3 = "Hello";
  console.log(sample3);
  console.log(Number.parseFloat(sample3));
  console.log(parseFloat(sample3));

  const sample4 = {};
  console.log(sample4);
  console.log(Number.parseFloat(sample4));
  console.log(parseFloat(sample4));
}
