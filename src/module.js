'use strict';

class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  greet = () => {
    console.log(`Hello, my name is, ${ this.name}`);
  };
  
  function greet(name = "Umar") {
    console.log(`Hello, my name is, ${ this.name}`);
  }
  
  greet();
  greet("Umar");
