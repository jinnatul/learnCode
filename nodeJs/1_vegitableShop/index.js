const fs = require('fs')

const output = fs.readFileSync('./files/text.txt', 'utf-8')
console.log(output)

const writeData = `${output}. write time: ${Date.now()}`
fs.writeFileSync('./files/output.txt', writeData)