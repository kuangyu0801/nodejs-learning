const request = require('postman-request') 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
console.log(process.argv)
const address = process.argv[2]

if (!address) {
    console.log('Please provide address')
} else {
    geocode(address, (error, {latitude, longitude, location} ={}) => {
        if (error) {
            return console.log('Error', error)
        } 
        console.log(location)
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(forecastData)
        })
    }) 
}