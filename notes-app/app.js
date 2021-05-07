//const add = require('./util.js')

//console.log(add(1, 5))

const validator = require('validator')
const getNotes = require('./nodes')

console.log(getNotes())
console.log('isEmail: ' + validator.isEmail('li@example.com'))
console.log('isUrl: ' + validator.isEmail('li@example.com'))