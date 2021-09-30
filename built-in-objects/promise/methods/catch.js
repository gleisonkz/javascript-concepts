{
  const p1 = new Promise((_, reject) => {
    reject("Something Went Wrong!");
  });

  p1.catch((error) => console.log(`P1 -- ${error} `));

  const p2 = Promise.reject("P2 -- SWW");
  p2.catch((error) => console.log(error));

  const p3 = Promise.reject(new Error("Error SWW"));
  p3.catch((error) => console.log(`P3 -- ${error.message} `)).then(() =>
    console.log("P3 -- Error Handled")
  );
}
