const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Li'
user.age = '17'

const userJSON = JSON.stringify(user);
fs.writeFileSync('user.json', userJSON)