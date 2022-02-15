{
  /* Array.prototype.every

    retorna um booleano indicando se TODOS os elementos
    do array satisfazem a condição passada como parâmetro.
  */

  {
    // verificando se todas as letras são 'a'

    const letters = ["a", "b", "c", "c", "c"];
    let times = 0;

    const hasA = letters.every((letter) => {
      times++;
      return letter === "a";
    });

    console.log(hasA);
    console.log(times);
  }
}
