const fs = require('fs');

// Synchronous = Blocking
const output = fs.readFileSync('./files/input.txt', 'utf-8')
console.log(output)
const writeData = `${output}. write time: ${Date.now()}`
fs.writeFileSync('./files/output.txt', writeData)


// Asynchronous = Non-Blocking
fs.readFile('./files/input.txt', 'utf-8', (err, data) => {
    if (err) return console.log('Some problem here :(')
    console.log(data)
    const writeData = `${data}. write time: ${Date.now()}`
    fs.writeFile('./files/output.txt', writeData, 'utf-8', (err) => {
        console.log('Write success')
    })
})