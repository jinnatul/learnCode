/* Variable define */
let name = 'Morol'
console.log(name) // Morol

let age = 24
console.log(age) // 24

let married = false
console.log(married) // false

let job
console.log(job) // undefined

job = 'Programmer'
console.log(job) // Programmer

//console.log(FirstName) // Uncaught ReferenceError: FirstName is not defined


/* Variable naming rules */
let _3Year = 3
// let if / function / delete / 3year/ Not support


/* Variable Mutation and Type Coercion */

// Type Coercion
console.log('My name is: ' + name + ' and age: ' + age) // My name is: Morol and age: 24

// Variable Mutation
alert('My name is: ' + name + ' and age: ' + age + '\n Job: ' + job + ' Married ? ' + married)

let lastName = prompt('What is ur last name ?')
console.log(name + " " + lastName)
