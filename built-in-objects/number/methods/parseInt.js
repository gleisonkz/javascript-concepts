{
  /*
  Number.parseInt
        
  método estático que
  tenta converter um valor para int de uma 
  determinada base numérica, caso não consiga retornar NaN.

  */

  console.log(parseInt === Number.parseInt);

  const sample1 = 5;
  console.log(Number.parseInt(sample1));
  console.log(parseInt(sample1));

  const sample2 = "1";
  console.log(Number.parseInt(sample2));
  console.log(parseInt(sample2));

  const sample3 = "0xF";
  console.log(Number.parseInt(sample3, 16));
  console.log(parseInt(sample3, 16));

  const sample4 = "Hello";
  console.log(Number.parseInt(sample4));
  console.log(parseInt(sample4));

  const sample5 = {};
  console.log(Number.parseInt(sample5));
  console.log(parseInt(sample5));
}
