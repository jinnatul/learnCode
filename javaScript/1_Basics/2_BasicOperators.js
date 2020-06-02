/* Basic operation */
let year, morolYear, jinnatYear;
now = 2020;
ageMorol = 24;
ageJinnat = 25;

// Math operators
morolYear = now - ageMorol;
jinnatYear = now - ageJinnat;

console.log(morolYear + ' ' + jinnatYear) // 1996 1995

console.log(morolYear + 10) // 2006
console.log(morolYear - 10) // 1986
console.log(morolYear * 10) // 19960
console.log(morolYear / 10) // 199.6
console.log(morolYear % 10) // 6

// Logical operators
let whoBig = morolYear > jinnatYear
console.log(whoBig) // true

// typeof operators
console.log(typeof morolYear) // number
console.log(typeof whoBig) // boolean
console.log(typeof 10) // number
console.log(typeof 'Morol') // string
let val;
console.log(typeof val) // undefined
