/* The Ternary Operator and Switch Statements */

// Ternary Operato
let name = 'Morol'
let age = 24

age >= 18 
    ?   console.log(name + ' drink beer')
    :   console.log(name + ' drink juice')
// Morol drink beer

let drink = age >= 18 ? 'beer' : 'juice'
console.log(drink)
// beer


// Switch statement
let job = 'programmer'
switch (job) {
    case 'programmer':
        console.log(name + ' is a programmer.')
        break;
    case 'teacher':
        console.log(name + ' is a teacher.')
        break;
    default:
        console.log(name + ' does something else.')
        break;
}
// Morol is a programmer.

switch (true) {
    case age < 13:
        console.log(name + ' is a boy.')
        break;
    case age >= 13 && age < 20:
        console.log(name + ' is a teenager.')
        break;
    case age >= 20 && age < 30:
        console.log(name + ' is a young man.')
        break;
    default:
        console.log(name + ' is a man.')
        break;
}
// Morol is a young man.
