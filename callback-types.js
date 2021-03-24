{
  // Função anónima

  setTimeout(function () {
    console.log("passando uma função anónima");
  }, 2000);

  // Arrow Function

  setTimeout(() => {
    console.log("passando uma Arrow Function");
  }, 2000);

  // Referência de uma Função

  setTimeout(sum, 2000);

  function sum(number1, number2) {
    console.log("passando a referência de uma função");
    return number1 + number2;
  }
}
