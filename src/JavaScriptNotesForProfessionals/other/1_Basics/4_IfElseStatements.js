/* If  else Statements */
let name = 'Morol';
let civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(name + ' is married');
}
else {
    console.log(name + ' will hopefully marry soon')
}
// Morol will hopefully marry soon


let isMarried = true;

if (isMarried) {
    console.log(name + ' is married');
}
else {
    console.log(name + ' will hopefully marry soon')
}
// Morol is married


/* BMI calculate */
let massMorol = 72 // kg
let heightMorol = 1.80 // meters

let massJinnat = 75 // kg
let heightJinnat = 1.75 // meters

let BMIMorol = massMorol / (heightMorol * heightMorol);
let BMIJinnat = massJinnat / (heightJinnat * heightJinnat);

if (BMIMorol > BMIJinnat) {
    console.log('Morol BMI is higher than Jinnat')
}
else {
    console.log('Jinnat BMI is higher than Morol')
}
// Jinnat BMI is higher than Morol

