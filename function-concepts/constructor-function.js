function Foo() {
  this.id = 20;
}

console.log(new Foo().id);

const dogProto = {
  bark() {
    console.log(name);
  },
};
const dogFactory = (name) => {
  const dog = Object.create(dogProto);
  return { name, ...dog };
};

const dog1 = dogFactory("Ralph");
const dog2 = dogFactory("Rex");

console.log(dog1.name);
console.log(dog2.name);

console.log(dog1.name);
console.log(dog2.name);

console.log(dog1.bark === dog2.bark);

function Categoria(nome) {
  this.totalProdutos = 0;
  this.nome = nome;
  const self = this;
    atualizaTotalProdutos () {
      self.totalProdutos += 1;
    };
  atualizaTotalProdutos();
}

const obj = new Categoria("Teste");
console.log(obj.nome);
console.log(obj.totalProdutos);
