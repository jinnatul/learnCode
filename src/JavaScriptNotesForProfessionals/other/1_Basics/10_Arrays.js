/* Arrays */

let name = ['Morol', 'arif', 'jinnat']
let year = new Array(24, 25, 26);

console.log(name) // (3) ["Morol", "arif", "jinnat"]
console.log(year.length) // 3

// mutate array data
name[name.length] = 'Morol'
console.log(name) // (4) ["Morol", "arif", "jinnat", "Morol"]

let info = ['morol', 24, true]
// insert last 
info.push('lastInsert')
console.log(info) // (4) ["morol", 24, true, "lastInsert"]

// insert first
info.unshift('Mr')
console.log(info) // (5) ["Mr", "morol", 24, true, "lastInsert"]

// remove last element
info.pop()
console.log(info) // (4) ["Mr", "morol", 24, true]

// remove first element
info.shift()
console.log(info) // (3) ["morol", 24, true]

console.log(info.indexOf(24)) // 1

