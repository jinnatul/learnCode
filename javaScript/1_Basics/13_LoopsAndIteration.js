/* Loops and Iteration */

let info = [true, 'Morol', 24, false]

// for loop
for (let index = 0; index < info.length; index++) {
    console.log(info[index])
}
/*
    true
    Morol
    24
    false
*/

// while loop
let index = 0;
while (index < info.length) {
    console.log(info[index])
    index++;
}
/*
    true
    Morol
    24
    false
*/

// continue statement
for (let index = 0; index < info.length; index++) {
    if (typeof info[index] !== 'string') continue
    console.log(info[index])
}
/*
    Morol
*/

// break statement
for (let index = 0; index < info.length; index++) {
    if (typeof info[index] === 'number') break
    console.log(info[index])
}
/*
    true
    Morol
*/

// loop backwards
for (let index = info.length - 1; index >= 0; index--) {
    console.log(info[index])
}
/*
    false
    24
    Morol
    true
*/
