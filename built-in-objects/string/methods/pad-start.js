{
  /* String.Prototype.padEnd
  
  preenche a string atual com uma determinada string (repetida, se necessário) 
  para que a string resultante alcance um determinado comprimento. 

  .*/
  {
    const str = "Breaded Mushrooms";
    const strPadded = str.padStart(25, ".");
    console.log(strPadded);
  }
  {
    const str = "5";
    const strPadded = str.padStart(3, "0");
    console.log(strPadded);
  }
  {
    const str = "5";
    const strPadded = str.padStart(3, "pad");
    console.log(strPadded);
  }
  {
    // caso não seja passado nenhum argumento,
    // o padrão é de uma string vazia
    const str = "200";
    const strPadded = str.padStart(5);
    console.log(strPadded);
    console.log(strPadded.length);
  }
}
