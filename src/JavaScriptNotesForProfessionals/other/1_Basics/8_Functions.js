/* Functions */

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

let ageMorol = calculateAge(1997)
let ageJinnat = calculateAge(1996)
console.log(ageMorol + ' ' + ageJinnat) /// 23 24

function yearUnitRetirement(year, name) {
    let age = calculateAge(year)
    let retirement = 65 - age;
    retirement > 0 
        ?   console.log(name + ' retires in ' + retirement + ' years.')
        :   console.log(name + ' is already retired')
}

yearUnitRetirement(1997, 'Morol') // Morol retires in 42 years.
yearUnitRetirement(1950, 'Rahim') // Rahim is already retirement
