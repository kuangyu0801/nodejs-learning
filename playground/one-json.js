const fs = require('fs')
/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
fs.writeFileSync('book.json', bookJSON)
const parseData = JSON.parse(bookJSON)
console.log(parseData.author)
*/
// byte string
const dataBuffer = fs.readFileSync('book.json')
// string
const dataJSON = dataBuffer.toString()

console.log(dataJSON)

// json object
const book = JSON.parse(dataJSON)

console.log(book.title)
