const { unwatchFile } = require("fs")

// Object property shorthand
const name = 'KY'
const userAge = 27

const user = {
    // shorthand
    name,
    age: userAge,
    location: 'Taipei'
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrices: undefined
}

console.log(product)
// destructing object and renaming
const {label, price:curPrice, stock, rating = 5, salePrices} = product
console.log(label)
console.log(stock)
console.log(curPrice)
console.log(rating)
console.log(salePrices)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('stock', product)
