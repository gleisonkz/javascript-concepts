/*
As arrow functions foram introduzidas no ECMA 2015 com o objetivo principal de 
fornecer uma sintaxe mais curta para uma function expression. 

Além de fornecer uma sintaxe mais curta, o que aumenta a legibilidade do código, 
ela não possui um valor próprio para o this. 

O valor do this dentro de uma arrow function é herdado do escopo delimitador (escopo em que ela foi declarada).
*/

/*
Você pode escrever uma arrow function
para adicionar dois números da seguinte forma. 
*/

const add = (num1, num2) => num1 + num2;
const res = add(5, 2);
console.log(res); // saída esperada 7

/*
Algumas regras de sintaxe para uma arrow function são:

- Os parâmetros devem ser passados entre colchetes.
- Se houver apenas um parâmetro, o colchete é opcional
- Se não houver nenhum parâmetro, deve-se utilizar colchetes vazio
- Se houver apenas uma única expressão no corpo da função, o uso de chaves é opcional
- Se houver apenas uma única expressão no corpo da função, o uso da instrução return é opcional
*/

{
  // Mais de 1 parâmetro e apenas 1 expressão no corpo
  const add = (num1, num2) => num1 + num2;
  add(1, 2);
}
{
  // Nenhum parâmetro e sem return
  const greet = () => console.log("hey");
  greet();
}
{
  // Mais de 1 parâmetro e mais de 1 expressão no corpo
  const divide = (num1, num2) => {
    if (num2 == 0) {
      return "can not divide";
    } else {
      return num1 / num2;
    }
  };
  divide(2, 5);
}

/*
Para retornar um objeto em uma arrow function, 
você pode usar a instrução return 
ou uma sintaxe ligeiramente diferente que é  colocar o objeto em um pequeno colchete, 
conforme mostrado no exemplo a seguir:
*/

{
  // com a instrução return
  const createProduct = (title, price) => {
    return {
      title: title,
      price: price,
    };
  };

  let p1 = createProduct("pen", 100);
  console.log(p1);
}

{
  // retorno implícito envolvendo o objeto entre parênteses
  const createProduct = (title, price) => ({
    title: title,
    price: price,
  });

  let p1 = createProduct("pen", 100);
  console.log(p1);
}

/*
Outros pontos importantes de uma arrow function são:

- Suporta rest parameters 
- Suporta valores padrão 
- Não possui o objeto arguments 
- Não possui this próprio 
- Não pode ser usada como um construtor

*/

/*
O valor do this de uma arrow function é herdado do escopo delimitador. 
Para entendê-lo de uma maneira melhor, considere o seguinte exemplo de código:
*/

{
  const product = {
    Title: "Pen",
    Price: 100,
  };

  function foo() {
    console.log(this);

    function bar() {
      console.log(this);
    }

    bar();
  }

  foo.call(product);

  /*
    A função foo é chamada indiretamente usando o método call() e passando 
    o objeto product como contexto a ser utilizado pelo this. 
    E como a função bar é chamada usando a invocação padrão de uma função, 
    
    o valor do this da função bar é o objeto global. Portanto, 
    mesmo bar sendo uma função interna de foo, ele tem o seu próprio this .
  */
}
{
  /*
    Mas, se você refatorar-mos a função bar para uma arrow function 
    em vez de ter seu próprio  this, ele será herdado do escopo delimitador, 
    conforme mostrado no próximo exemplo abaixo. 
*/
}
