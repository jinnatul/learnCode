/* Objects and Properties */

let myInfo = {
    name: "Morol",
    age: 24,
    family: ['i', 'me', 'my'],
    job: "Programmer",
    isMarried: false
}

console.log(myInfo)
// {name: "Morol", age: 24, family: Array(3), job: "Programmer", isMarried: false}

console.log(myInfo.name) // Morol
console.log(myInfo['age']) // 24


let my = new Object();
my.name = 'Morol'
my['age'] = '24'

console.log(my) // {name: "Morol", age: "24"}