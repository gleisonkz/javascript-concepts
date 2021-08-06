{
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    logProperties() {
      console.log(`Name: ${this.name} | Price: ${this.price}`);
    }
  }
  const obj = new Product("John", 12.2);

  class Food {
    constructor(name, price) {
      obj.logProperties.call(obj, name, price);
    }
  }

  const objFood = new Food("cheese", 5);
}
