{
  /* Array.Prototype.splice

    altera o conteúdo de uma array, 
    removendo ou substituindo elementos existentes
    e / ou adicionando novos elementos */

  {
    const months = ["Jan", "March", "April", "June"];
    months.splice(1, 0, "Feb", 2, 3);
    console.log(months);

    months.splice(4, 1, "May");
    console.log(months);
  }

  {
    // removendo 0 elementos
    // passando um índice inicial fora dos limites do array
    const months = ["Jan", "March", "April"];
    const days = ["Monday", "Tuesday", "Wednesday"];

    const removedMonths = months.splice(1, 0);
    const removedDays = days.splice(3, 2);

    console.log(removedMonths);
    console.log(removedDays);
  }

  {
    // Removendo todos os elementos subsequentes a partir de um índice

    const months = ["Jan", "March", "April"];

    const removedMonths = months.splice(1);

    console.log(months);
    console.log(removedMonths);
  }
  //Utilizando índice negativo

  {
    const months = ["January", "February", "March", "April"];
    const removedMonths = months.splice(-1);

    console.log(months);
    console.log(removedMonths);
  }

  {
    const months = ["January", "February", "March"];
    const removedMonths = months.splice(4, 2);
    console.log(removedMonths);
  }
}
