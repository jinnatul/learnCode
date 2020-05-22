/* BMI calculate */
let massMorol = 72 // kg
let heightMorol = 1.80 // meters

let massJinnat = 75 // kg
let heightJinnat = 1.75 // meters

let BMIMorol = massMorol / (heightMorol * heightMorol);
let BMIJinnat = massJinnat / (heightJinnat * heightJinnat);

console.log(BMIMorol + ' ' + BMIJinnat) // 22.22222222222222 24.489795918367346

let morolHighertBMI = BMIMorol > BMIJinnat

console.log(morolHighertBMI) // false
