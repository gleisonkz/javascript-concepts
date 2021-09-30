{
  /*
      Number.prototype.toLocaleString
            
      converte um número em uma string usando 
      a localização atual ou uma especificada
  */

  const number = 123456.789;
  console.log(number.toLocaleString());

  // usando o parâmetro locales
  console.log(number.toLocaleString("pt-BR"));
  console.log(number.toLocaleString("ar-EG"));

  // usando o parâmetro options

  const formatEur = number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  console.log(formatEur);

  const formatJapan = number.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  console.log(formatJapan);
}
