function checkMail() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    return randomNumber > 0.5
      ? resolve("Mail has arrived")
      : reject(new Error("Failed to arrive"));
  });
}

checkMail()
  .then((mail) => console.log(mail))
  .catch((err) => console.error(err))
  .finally(() => console.log("Experiment completed"));
