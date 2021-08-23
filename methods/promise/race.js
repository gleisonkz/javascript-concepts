async function getCepFromViaCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  return response.json();
}

async function getCepFromApiCep(cep) {
  const url = `https://ws.apicep.com/cep/${cep}.json`;
  const response = await fetch(url);
  return response.json();
}

Promise.race([
  getCepFromViaCep("30580585"),
  getCepFromApiCep("30580-585"),
]).then((data) => {
  console.log(data);
});
