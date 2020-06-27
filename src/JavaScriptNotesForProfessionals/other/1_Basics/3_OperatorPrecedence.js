/* Operator Precedence */

let now = 2020;
let yearMorol = 1997
let fullAge = 20;

// Multiple operators
let isFullAge = now - yearMorol >= fullAge
console.log(isFullAge) // true

// Grouping
let ageMorol = now - yearMorol;
let ageJinnat = 25;
let average = (ageJinnat + ageMorol) / 2;
console.log(average) // 24

// Multiple assignment

let num1, num2;
num1 = num2 = (4 * 5) - 3 / 5
console.log(num1 + ' ' + num2) // 19.4

// More operators
num1 *= 2
console.log(num1) // 38.8

num1 += 10
console.log(num1) // 48.8

num1 --
console.log(num1) // 47.8
