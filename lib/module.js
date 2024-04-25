'use strict';

var _this = void 0;
class User {
  constructor(name) {
    this.name = name;
  }
}
greet = function () {
  console.log("Hello, my name is, ".concat(_this.name));
};
function greet() {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Umar";
  console.log("Hello, my name is, ".concat(this.name));
}
greet();
greet("Umar");