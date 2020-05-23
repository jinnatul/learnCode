/* Function Statements and Expressions */

// Function declartion
function name(params) {}

// function expression
let whatDoYou = function(job, name) {
    switch (job) {
        case 'programmer':
            return name + ' is a programmer.'
        case 'teacher':
            return name + ' is a teacher.'
        default:
            return name + ' does something else.'
    }
}

console.log(whatDoYou('programmer', 'Morol')) // Morol is a programmer.
console.log(whatDoYou('teacher', 'Jinnatul')) // Jinnatul is a teacher.
console.log(whatDoYou('designer', 'Arif')) // Arif does something else.
