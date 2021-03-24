{
  {
    function welcomeDeclaration(name) {
      const message = `Welcome ${name}`;
      return arguments.length;
    }

    const welcomeExpression = function (name) {
      const message = `Welcome ${name}`;
      return arguments.length;
    };

    const welcomeArrow = (name) => {
      const message = `Welcome ${name}`;
      return arguments.length;
    };

    console.log(welcomeDeclaration("John"));
    console.log(welcomeExpression("John", "2"));
    console.log(welcomeArrow("John"));
  }

  {
    function peopleDeclaration() {}
    const peopleExpression = function () {};
    const peopleArrow = () => {};

    //   new peopleDeclaration();
    //   new peopleExpression();
    //   new peopleArrow();
  }

  {
    this.baseNumber = 100;

    let arrow = () => {
      this.baseNumber = 150;
    };

    function declaration() {
      this.baseNumber = 200;
    }

    const expression = function () {
      this.baseNumber = 200;
    };

    console.log(this.baseNumber);
    arrow();
    console.log(this.baseNumber);
    declaration();
    console.log(this.baseNumber);
    expression();
    console.log(this.baseNumber);
  }
}
