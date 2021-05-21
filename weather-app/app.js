const request = require('postman-request') 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
console.log(process.argv)
const address = process.argv[2]

if (!address) {
    console.log('Please provide address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log('Error', error)
        } 
        console.log(data.location)
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(forecastData)
        })
    }) 
}