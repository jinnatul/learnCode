/* challenge_4 */

let info1 = {
    name: 'Morol',
    mass: 70,
    height: 1.80,
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    } 
}

let info2 = {
    name: 'Jinnat',
    mass: 75,
    height: 1.80,
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    } 
}

/*
info1.calBMI()
info2.calBMI()

console.log(info1)
    {name: "Morol", mass: 70, height: 1.8, bmi: 21.604938271604937, calBMI: ƒ}
    name: "Morol"
    mass: 70
    height: 1.8
    calBMI: ƒ ()
    bmi: 21.604938271604937

console.log(info2)
    {name: "Jinnat", mass: 75, height: 1.8, bmi: 23.148148148148145, calBMI: ƒ}
    name: "Jinnat"
    mass: 75
    height: 1.8
    calBMI: ƒ ()
    bmi: 23.148148148148145 
*/

if (info1.calBMI() > info2.calBMI()) {
    console.log(info1.name + ' has a higher of ' + info1.bmi)
}
else if (info2.calBMI() > info1.calBMI()) {
    console.log(info2.name + ' has a higher of ' + info2.bmi)
}
else {
    console.log('Both are same BMI')
}
// Jinnat has a higher of 23.148148148148145
