// step --> 1
/*
class CallResult {
  add(num1, num2) {
    return num1 + num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

module.exports = CallResult;
*/


// step --> 2
module.exports = class {
  add(num1, num2) {
    return num1 + num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}
