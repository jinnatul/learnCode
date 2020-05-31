let module_1 = require('./testModule1')
let methods = new module_1();

/*****Test module --> 1 *****/
// module.exports
console.log(methods.add(3, 2)); // 5
console.log(methods.multiply(3, 2)); // 6
console.log(methods.divide(3, 2)); // 1.5

/*****Test module --> 2 *****/
// exports
let module_2 = require('./testModule2');
console.log(module_2.add(3, 2)); // 5
console.log(module_2.multiply(3, 2)); // 6
console.log(module_2.divide(3, 2)); // 1.5

let { add, multiply, divide } = require('./testModule2');
console.log(add(3, 2)); // 5
console.log(multiply(3, 2)); // 6
console.log(divide(3, 2)); // 1.5

/*****Test module --> 3 *****/
// caching
require("./testModule3")() // Hi morol, from testmodule -->3 export data
require("./testModule3")() // Hi morol, from testmodule -->3 export data
