/* Hoisting in Practice */

callFun(1995) // 25
function callFun(year) {
    console.log(2020 - year)
}
callFun(1997) // 23

// another way
// retirement(1995) // Uncaught ReferenceError: Cannot access 'retirement' before initialization

let retirement = function(year) {
    console.log(65 - (2020 - year))
}
retirement(1997) // 42

// variable
console.log(age) // undefined
var age = 24
console.log(age) // 24

//console.log(year) // Uncaught ReferenceError: Cannot access 'year' before initialization
let year = 25
console.log(year) // 25

age = 25
function call() {
    //console.log(age) // Uncaught ReferenceError: Cannot access 'age' before initialization
    let age = 50;
    console.log(age) // 50
}
call()
console.log(age) // 25
