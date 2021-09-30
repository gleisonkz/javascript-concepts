{
  function sum(x, y) {
    return x + y;
  }

  console.log(sum.length);
  console.log(sum.name);

  const source = sum.toString();
  console.log(source);
}
{
  const cat = { type: "Cat", sound: "Meow" };
  const dog = { type: "Dog", sound: "Woof" };

  function say(greeting) {
    console.log(greeting);
    // acessando o contexto do this
    console.log(this.type + " says " + this.sound);
  }

  say.call(cat, "Hi");

  dog;
}

{
  const car = {
    speed: 5,
    start() {
      return `start with ${this.speed} km/h`;
    },
  };

  const aircraft = {
    speed: 10,
    fly() {
      return "Flying";
    },
  };

  const start = car.start.call(aircraft);
  console.log(start);
}
Function_Declaration: {
  function isEven(num) {
    return num % 2 === 0;
  }

  console.log(isEven(24));
  console.log(isEven(11));

  // Variável elevada ao topo do escopo
  console.log(hello("Aliens"));

  // Função Nomeada
  console.log(hello.name);

  // Variável que armazena o objeto Function
  console.log(typeof hello);

  function hello(name) {
    return `Hello ${name}!`;
  }

  // Function declaration:
  // começa com a palavra-chave  "function"

  function isNull(value) {
    return value == null;
  }

  // Function expression:
  // iniciando com "const"
  const isTruthy = function (value) {
    return !!value;
  };

  // Function expression:
  // como um argumento para o método filter()
  const numbers = [1, "a", 5].filter(function (item) {
    return typeof item === "number";
  });

  // Function expression (IIFE):
  // iniciando com a abertura de parênteses "("

  (function messageFunction(message) {
    return message + " World!";
  })("Hello");

  (function () {
    "use strict";
    let ok;
    if (true) {
      ok = function () {
        return "true ok";
      };
    } else {
      ok = function () {
        return "false ok";
      };
    }
    console.log(typeof ok === "function");
    console.log(ok());
  })();

  const people = {
    name: "John",
    speak: function () {
      console.log("Hello");
    },
  };

  const ages = [12, 22, 32, 42];
  const sum = ages.reduce(function (acc, item) {
    return (acc += item);
  });

  console.log(sum);

  const sampleFn = function (variable) {
    return typeof variable;
  };

  console.log(sampleFn.name);

  const getType = function funName(variable) {
    const isFn = typeof funName === "function";
    console.log(isFn);
    return typeof variable;
  };

  console.log(getType(3));
  console.log(getType.name);
  console.log(typeof funName);

  const addMethod = "add";
  const getMethod = "get";

  const collection = {
    items: [],
    [addMethod](...items) {
      this.items.push(...items);
    },
    [getMethod](index) {
      return this.items[index];
    },
  };

  collection[addMethod]("C#", "TypeScript", "Angular");
  const item = collection[getMethod](1);

  console.log(item);
}
