{
  // Definição de uma Function Declaration
  function awful(name) {
    return `Welcome ${name}, I'm a Function Declaration`;
  }

  // Definição de uma Function Expression
  const bad = function hello(name) {
    return `Welcome ${name}, I'm a Function Expression`;
  };

  // Definição de uma Anonymous Function Expression
  const good = function (name) {
    return `Welcome ${name}, I'm a Anonymous Function Expression`;
  };

  // Definição de uma Immediately Invoked Function Expression - IIFE
  // Aqui tmb é possível defini-la com ou sem nome

  (function (name) {
    console.log(`Welcome ${name}, I'm a IIFE Function`);
  })("John");

  (function hello(name) {
    console.log(`Welcome ${name}, I'm a IIFE Function with Name`);
  })("John");

  // Definição de uma Arrow Function
  const awesome = (name) => {
    return `Welcome ${name}, I'm a Arrow Function`;
  };

  {
    // Definição de uma função utilizando o construtor do objeto Function

    const numberA = "numberA",
      numberB = "numberB";
    const sumFunction = new Function(
      numberA,
      numberB,
      "return numberA + numberB"
    );
    const sum = sumFunction(10, 15);
    console.log(sum);

    /*
    
    Aqui a sumFunction é criada com a invocação do construtor Function 
    que tem os parâmetros numberA e numberB e o corpo retorna numberA + numberB.

    As funções criadas desta forma não têm acesso ao escopo atual, portanto,
    closures não podem ser criadas. 
    Elas são sempre criadas no escopo global.

    /*
    Lembre-se de que não é recomendado declarar funções usando new Function(). 
    Pois como o corpo da função é avaliado em tempo de execução, essa abordagem 
    herda muitos problemas de uso de eval(), riscos de segurança,
    depuração mais difícil, nenhuma maneira de aplicar otimizações de engine,
    nenhum preenchimento automático do editor.
    */
  }

  console.log(awful("John"));
  console.log(bad("John"));
  console.log(good("John"));
  console.log(awesome("John"));
}
