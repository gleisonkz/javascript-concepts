{
  /*
  Array.Prototype.every

    retorna um booleano indicando se ALGUM dos elementos
    do array satisfazem a condição passada como parâmetro.

   */

  {
    // verificando se todos os números são 1

    const numbers = [1, 2, 3, 4, 5];
    let times = 0;

    const isOne = numbers.some((number) => {
      times++;
      return number === 1;
    });

    console.log(isOne);
    console.log(times);
  }
}
