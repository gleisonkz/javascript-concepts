const promise = new Promise((resolve, reject) => {
  resolve("Success!");
  reject("Something Went Wrong!");
});

promise.then(
  (value) => {
    console.log(value);
  },
  (message) => {
    console.log(`Ocorreu o seguinte erro: ${message}`);
  }
);
