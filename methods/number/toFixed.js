{
  /*
    Number.prototype.toFixed
          
    retorna uma string de um number com 
    um numero especifico de casas decimais.
  */

  const age = 25;
  const weight = 80.878965;

  let formattedAge = age.toFixed();

  console.log(formattedAge);

  formattedAge = age.toFixed(4);
  console.log(formattedAge);

  console.log(typeof formattedAge);

  let formattedWeight = weight.toFixed();
  console.log(formattedWeight);

  formattedWeight = weight.toFixed(4);
  console.log(formattedWeight);
}
