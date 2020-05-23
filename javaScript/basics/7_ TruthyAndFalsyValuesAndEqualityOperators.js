/* Truthy and Falsy Values and Equality Operators */

// Falsy Values: undefined, null, 0, '', NaN
// Truthy Values: Not falsy values

let height;

if (height) {
    console.log('Variable is defined')
}
else {
    console.log('Variable has not beeen defined')
}
// Variable has not beeen defined

height = 0
if (height) {
    console.log('Variable is defined')
}
else {
    console.log('Variable has not beeen defined')
}
// Variable has not beeen defined
height = 50
if (height || height === 0) {
    console.log('Variable is defined')
}
else {
    console.log('Variable has not beeen defined')
}
// Variable is defined

height = ''
if (height && height === 0) {
    console.log('Variable is defined')
}
else {
    console.log('Variable has not beeen defined')
}
// Variable has not beeen defined

height = 24
if (height == '24') {
    console.log('24 is a number so check == ')
}
else {
    console.log('Not a number')
}
// 24 is a number so check == 

height = 24
if (height === '24') {
    console.log('24 is a number')
}
else {
    console.log('24 is a string so check === ')
}
// 24 is a string so check === 
