{
  /*
    Number.prototype.valueOf
           
    retorna o valor primitivo contido
    em um objeto Number
  */

  let numObj = new Number(10);
  console.log(typeof numObj);

  let num = numObj.valueOf();
  console.log(num);
  console.log(typeof num);
}
