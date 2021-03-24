{
  /* String.Prototype.normalize

retorna a forma unicode normalizada de uma string.*/

  const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
  const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

  console.log(`${name1}, ${name2}`);
  console.log(name1 === name2);
  console.log(name1.length === name2.length);

  const name1NFC = name1.normalize();
  const name2NFC = name2.normalize();

  console.log(`${name1NFC}, ${name2NFC}`);
  console.log(name1NFC === name2NFC);
  console.log(name1NFC.length === name2NFC.length);
}
