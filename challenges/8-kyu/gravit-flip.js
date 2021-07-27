/*

Kata Nível 8 kyu - Gravity Flip

Existem algumas colunas de cubos de brinquedo na caixa, dispostos em uma linha. 
Cada coluna contém N cubos 

No início, a gravidade na caixa está puxando os cubos para baixo. 
Quando Bob muda a gravidade, ela começa a puxar todos os cubos para um certo lado da caixa,
onde a variável direction , pode ser 'L' ou 'R' (left ou right | esquerda ou direita). 

Abaixo está um exemplo de como uma caixa de cubos pode 
se parecer antes e depois de mudar a gravidade.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+

Dada a configuração inicial dos cubos na caixa, descubra 
quantos cubos existem em cada uma das n colunas depois que Bob muda a gravidade.

os valores dentro do array representam a quantidade de cubos em cada coluna

Exemplos :

flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+



flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

          +---+     +---+       +---++---+                     
          |   |     |   |       |   ||   |                     
          +---+     +---+       +---++---+                     
     +---++---+     +---+       +---++---++---+                
     |   ||   |     |   |       |   ||   ||   |                
     +---++---+     +---+       +---++---++---+                
     +---++---++---++---+       +---++---++---++---+      
     |   ||   ||   ||   |       |   ||   ||   ||   |      
     +---++---++---++---+       +---++---++---++---+      
     +---++---++---++---+       +---++---++---++---+      
     |   ||   ||   ||   |   --> |   ||   ||   ||   |      
     +---++---++---++---+       +---++---++---++---+      
+---++---++---++---++---+       +---++---++---++---++---+ 
|   ||   ||   ||   ||   |       |   ||   ||   ||   ||   | 
+---++---++---++---++---+       +---++---++---++---++---+ 

*/

const flipOld = (direction, columns) => {
  const columnsLength = columns.length;
  const maxColumnCubes = Math.max(...columns);
  const sortByDirection = (direction, arr) =>
    direction === "R" ? arr : arr.reverse();
  const cubesColumns = sortByDirection(direction, [...columns]);
  let stopsCount = 0;
  while (stopsCount !== columnsLength) {
    for (let index = 0; index < cubesColumns.length; index++) {
      const currentCubesColumn = cubesColumns[index];
      const nextCubesColumn = cubesColumns[index + 1];
      const nextColumHoles = maxColumnCubes - nextCubesColumn;
      const canMove =
        currentCubesColumn >= 1 &&
        nextCubesColumn != undefined &&
        nextCubesColumn < currentCubesColumn;
      if (canMove) {
        const differenceBetweenColumns = currentCubesColumn - nextCubesColumn;
        const getCubesToMove = () => {
          if (nextColumHoles <= currentCubesColumn) {
            if (differenceBetweenColumns === 1) {
              return 1;
            }
            return differenceBetweenColumns;
          } else if (nextColumHoles === maxColumnCubes) {
            return currentCubesColumn;
          }
          return currentCubesColumn - 1;
        };
        const cubesToMove = getCubesToMove();
        cubesColumns[index] -= cubesToMove;
        cubesColumns[index + 1] += cubesToMove;
        continue;
      }
      stopsCount++;
    }
    if (stopsCount != columnsLength) stopsCount = 0;
  }
  return sortByDirection(direction, cubesColumns);
};

const flip = (direction, columns) => {
  return columns.sort((a, b) => (direction === "R" ? a - b : b - a));
};

{
  // Teste 1 deve retornar [1, 2, 2, 3]
  const [direction, cubes] = ["R", [3, 2, 1, 2]];
  console.log(flip(direction, cubes));
  console.log(assert(direction, cubes, [1, 2, 2, 3]));
}
{
  // Teste 2 deve retornar [5, 5, 4, 3, 1]
  const [direction, cubes] = ["L", [1, 4, 5, 3, 5]];
  console.log(flip(direction, cubes));
  console.log(assert(direction, cubes, [5, 5, 4, 3, 1]));
}
{
  // Teste 3 deve retornar [9, 8, 3, 2, 1, 0]
  const [direction, cubes] = ["L", [3, 0, 9, 8, 1, 2]];
  console.log(flip(direction, cubes));
  console.log(assert(direction, cubes, [9, 8, 3, 2, 1, 0]));
}
{
  // Teste 4 deve retornar [12, 1, 0, 0, 0]
  const [direction, cubes] = ["L", [0, 0, 12, 0, 1]];
  console.log(flip(direction, cubes));
  console.log(assert(direction, cubes, [12, 1, 0, 0, 0]));
}
{
  // Teste 5 deve retornar [2, 4, 7, 13, 93]
  const [direction, cubes] = ["R", [13, 2, 4, 7, 93]];
  console.log(flip(direction, cubes));
  console.log(assert(direction, cubes, [2, 4, 7, 13, 93]));
}
{
  // Teste 6 deve retornar [1, 2, 3, 4, 5]
  const [direction, cubes] = ["R", [5, 4, 3, 2, 1]];
  console.log(flip(direction, cubes));
  console.log(assert(direction, cubes, [1, 2, 3, 4, 5]));
}

function assert(direction, cubes, expected) {
  function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  const resultFn = flip(direction, cubes);
  const result = compareArrays(resultFn, expected);
  return result ? "OK" : "Algo deu errado";
}

/*

flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]

+---+                           +---+                           +---+                            +---+                       +---+  
|   |                           |   |                           |   |                            |   |                       |   |  
+---+                           +---+                           +---+                            +---+                       +---+  
+---++---+     +---+       +---++---+     +---+       +---+     +---++---+        +---+     +---++---+             +---++---++---+
|   ||   |     |   |   --> |   ||   |     |   |   --> |   |     |   ||   |    --> |   |     |   ||   |    -->      |   ||   ||   |
+---++---+     +---+       +---++---+     +---+       +---+     +---++---+        +---+     +---++---+             +---++---++---+
+---++---++---++---+       +---++---++---++---+       +---++---++---++---+        +---++---++---++---+        +---++---++---++---+
|   ||   ||   ||   |       |   ||   ||   ||   |       |   ||   ||   ||   |        |   ||   ||   ||   |        |   ||   ||   ||   |
+---++---++---++---+       +---++---++---++---+       +---++---++---++---+        +---++---++---++---+        +---++---++---++---+

flip('L', [5, 4, 3, 2, 1])  =>  [1, 2, 3, 4, 5]

+---+                                  +---+                               +---+                                +---+                                +---+                          +---+                          +---+                         +---+                         +---+                          +---+                          +---+     
|   |                                  |   |                               |   |                                |   |                                |   |                          |   |                          |   |                         |   |                         |   |                          |   |                          |   |     
+---+                                  +---+                               +---+                                +---+                                +---+                          +---+                          +---+                         +---+                         +---+                          +---+                          +---+     
+---+ +---+                      +---+ +---+                    +---+      +---+                +---+           +---+           +---+                +---+           +---+          +---+                +---+     +---+                    +---++---+                    +---++---+                     +---++---+                     +---++---+     
|   | |   |                      |   | |   |                    |   |      |   |                |   |           |   |           |   |                |   |           |   |          |   |                |   |     |   |                    |   ||   |                    |   ||   |                     |   ||   |                     |   ||   |     
+---+ +---+                      +---+ +---+                    +---+      +---+                +---+           +---+           +---+                +---+           +---+          +---+                +---+     +---+                    +---++---+                    +---++---+                     +---++---+                     +---++---+     
+---+ +---++---+                 +---+ +---++---+               +---+ +---++---+                +---+ +---+     +---+           +---+ +---+          +---+      +---++---+          +---+      +---+     +---+     +---+     +---+          +---++---+          +---+     +---++---+                +---++---++---+                +---++---++---+
|   | |   ||   |                 |   | |   ||   |               |   | |   ||   |                |   | |   |     |   |           |   | |   |          |   |      |   ||   |          |   |      |   |     |   |     |   |     |   |          |   ||   |          |   |     |   ||   |                |   ||   ||   |                |   ||   ||   |
+---+ +---++---+                 +---+ +---++---+               +---+ +---++---+                +---+ +---+     +---+           +---+ +---+          +---+      +---++---+          +---+      +---+     +---+     +---+     +---+          +---++---+          +---+     +---++---+                +---++---++---+                +---++---++---+
+---+ +---++---++---+            +---+ +---++---++---+          +---+ +---++---++---+           +---+ +---++---++---+           +---+ +---++---+     +---+      +---++---++---+     +---+      +---++---++---+     +---+     +---++---+     +---++---+     +---++---+     +---++---+      +---+     +---++---++---+           +---++---++---++---+
|   | |   ||   ||   |        --> |   | |   ||   ||   |      --> |   | |   ||   ||   |      -->  |   | |   ||   ||   |      -->  |   | |   ||   |     |   | -->  |   ||   ||   |     |   | -->  |   ||   ||   |     |   | --> |   ||   |     |   ||   | --> |   ||   |     |   ||   | -->  |   |     |   ||   ||   | -->       |   ||   ||   ||   |
+---+ +---++---++---+            +---+ +---++---++---+          +---+ +---++---++---+           +---+ +---++---++---+           +---+ +---++---+     +---+      +---++---++---+     +---+      +---++---++---+     +---+     +---++---+     +---++---+     +---++---+     +---++---+      +---+     +---++---++---+           +---++---++---++---+
+---+ +---++---++---++---+       +---+ +---++---++---++---+     +---+ +---++---++---++---+      +---+ +---++---++---++---+      +---+ +---++---++---++---+      +---++---++---++---++---+      +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+      +---++---++---++---++---+      +---++---++---++---++---+
|   | |   ||   ||   ||   |       |   | |   ||   ||   ||   |     |   | |   ||   ||   ||   |      |   | |   ||   ||   ||   |      |   | |   ||   ||   ||   |      |   ||   ||   ||   ||   |      |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |      |   ||   ||   ||   ||   |      |   ||   ||   ||   ||   |
+---+ +---++---++---++---+       +---+ +---++---++---++---+     +---+ +---++---++---++---+      +---+ +---++---++---++---+      +---+ +---++---++---++---+      +---++---++---++---++---+      +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+      +---++---++---++---++---+      +---++---++---++---++---+





flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

          +---+     +---+                 +---++---+               +---+     +---+          +---+          +---+          +---+     +---+               +---++---+                    +---++---+                    +---++---+                    
          |   |     |   |                 |   ||   |               |   |     |   |          |   |          |   |          |   |     |   |               |   ||   |                    |   ||   |                    |   ||   |                    
          +---+     +---+                 +---++---+               +---+     +---+          +---+          +---+          +---+     +---+               +---++---+                    +---++---+                    +---++---+                    
     +---++---+     +---+            +---++---++---+               +---++---++---+          +---+     +---++---+          +---+     +---++---+          +---++---+     +---+          +---++---++---+               +---++---++---+               
     |   ||   |     |   |            |   ||   ||   |               |   ||   ||   |          |   |     |   ||   |          |   |     |   ||   |          |   ||   |     |   |          |   ||   ||   |               |   ||   ||   |               
     +---++---+     +---+            +---++---++---+               +---++---++---+          +---+     +---++---+          +---+     +---++---+          +---++---+     +---+          +---++---++---+               +---++---++---+               
     +---++---++---++---+            +---++---++---++---+          +---++---++---++---+     +---+     +---++---++---+     +---+     +---++---++---+     +---++---+     +---++---+     +---++---++---+     +---+     +---++---++---++---+     
     |   ||   ||   ||   |            |   ||   ||   ||   |          |   ||   ||   ||   |     |   |     |   ||   ||   |     |   |     |   ||   ||   |     |   ||   |     |   ||   |     |   ||   ||   |     |   |     |   ||   ||   ||   |     
     +---++---++---++---+            +---++---++---++---+          +---++---++---++---+     +---+     +---++---++---+     +---+     +---++---++---+     +---++---+     +---++---+     +---++---++---+     +---+     +---++---++---++---+     
     +---++---++---++---+            +---++---++---++---+          +---++---++---++---+     +---+     +---++---++---+     +---+     +---++---++---+     +---++---+     +---++---+     +---++---++---+     +---+     +---++---++---++---+     
     |   ||   ||   ||   |   -->      |   ||   ||   ||   | -->      |   ||   ||   ||   | --> |   |     |   ||   ||   | --> |   |     |   ||   ||   | --> |   ||   |     |   ||   | --> |   ||   ||   |     |   | --> |   ||   ||   ||   |     
     +---++---++---++---+            +---++---++---++---+          +---++---++---++---+     +---+     +---++---++---+     +---+     +---++---++---+     +---++---+     +---++---+     +---++---++---+     +---+     +---++---++---++---+     
+---++---++---++---++---+       +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+
|   ||   ||   ||   ||   |       |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |     |   ||   ||   ||   ||   |
+---++---++---++---++---+       +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+     +---++---++---++---++---+



flip('L', [3, 0, 9, 8, 1, 2])  =>  [ 9, 9, 2, 1, 1, 1 ]

          +---+                               +---+                          +---+                           +---+                              +---+                               +---+                               +---+                              +---+                          
          |   |                               |   |                          |   |                           |   |                              |   |                               |   |                               |   |                              |   |                          
          +---+                               +---+                          +---+                           +---+                              +---+                               +---+                               +---+                              +---+                          
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          |   ||   |                          |   ||   |                     |   |     |   |                 |   |          |   |               |   |     |   |                     |   ||   |                          |   ||   |                         |   ||   |                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          |   ||   |                          |   ||   |                     |   |     |   |                 |   |          |   |               |   |     |   |                     |   ||   |                          |   ||   |                         |   ||   |                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          |   ||   |             -->          |   ||   |            -->      |   |     |   |             --> |   |          |   |           --> |   |     |   |                 --> |   ||   |                      --> |   ||   |                     --> |   ||   |                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          |   ||   |                          |   ||   |                     |   |     |   |                 |   |          |   |               |   |     |   |                     |   ||   |                          |   ||   |                         |   ||   |                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
          |   ||   |                          |   ||   |                     |   |     |   |                 |   |          |   |               |   |     |   |                     |   ||   |                          |   ||   |                         |   ||   |                     
          +---++---+                          +---++---+                     +---+     +---+                 +---+          +---+               +---+     +---+                     +---++---+                          +---++---+                         +---++---+                     
+---+     +---++---+                +---+     +---++---+                +---++---+     +---+                 +---++---+     +---+               +---++---++---+                     +---++---++---+                     +---++---++---+                    +---++---++---+                
|   |     |   ||   |                |   |     |   ||   |                |   ||   |     |   |                 |   ||   |     |   |               |   ||   ||   |                     |   ||   ||   |                     |   ||   ||   |                    |   ||   ||   |                
+---+     +---++---+                +---+     +---++---+                +---++---+     +---+                 +---++---+     +---+               +---++---++---+                     +---++---++---+                     +---++---++---+                    +---++---++---+                
+---+     +---++---+     +---+      +---+     +---++---++---+           +---++---+     +---++---+            +---++---+     +---++---+          +---++---++---+     +---+           +---++---++---+     +---+           +---++---++---++---+               +---++---++---++---+          
|   |     |   ||   |     |   |      |   |     |   ||   ||   |           |   ||   |     |   ||   |            |   ||   |     |   ||   |          |   ||   ||   |     |   |           |   ||   ||   |     |   |           |   ||   ||   ||   |               |   ||   ||   ||   |          
+---+     +---++---+     +---+      +---+     +---++---++---+           +---++---+     +---++---+            +---++---+     +---++---+          +---++---++---+     +---+           +---++---++---+     +---+           +---++---++---++---+               +---++---++---++---+          
+---+     +---++---++---++---+      +---+     +---++---++---++---+      +---++---+     +---++---++---+       +---++---+     +---++---++---+     +---++---++---+     +---++---+      +---++---++---+     +---++---+      +---++---++---++---+     +---+     +---++---++---++---++---+     
|   |     |   ||   ||   ||   |      |   |     |   ||   ||   ||   |      |   ||   |     |   ||   ||   |       |   ||   |     |   ||   ||   |     |   ||   ||   |     |   ||   |      |   ||   ||   |     |   ||   |      |   ||   ||   ||   |     |   |     |   ||   ||   ||   ||   |     
+---+vazio+---++---++---++---+      +---+vazio+---++---++---++---+      +---++---+vazio+---++---++---+       +---++---+vazio+---++---++---+     +---++---++---+vazio+---++---+      +---++---++---+vazio+---++---+      +---++---++---++---+vazio+---+     +---++---++---++---++---+vazio
*/