//const add = require('./util.js')
const chalk = require('chalk');

//console.log(add(1, 5))

const validator = require('validator')
const getNotes = require('./nodes')

console.log(getNotes())
console.log('isEmail: ' + validator.isEmail('li@example.com'))
console.log(chalk.green('isUrl: ' + validator.isEmail('li@example.com')))