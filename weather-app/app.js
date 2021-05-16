const request = require('postman-request') 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
/*
const url = 'http://api.weatherstack.com/current?access_key=808b55fed3f288bf11c87b4cc8850d79&query=34.0544,-118.2439'
console.log('Sending request: ' + url)
request( {url: url, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service")
    } else if (response.body.error) {
        console.log("Unable to find location")
    } else {
        const data = response.body.current
        console.log(data.weather_descriptions[0])
        console.log('It is currently ' + data.temperature + '. It feels like ' + data.feelslike + ' out')
        console.log('There is a ' + data['precip'] + ' % probability of rain')
    }
})
*/

// Geocoding
// Address -> Lat/Long -> Weather
/*
const gUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3QxNjk5NzEiLCJhIjoiY2tvcTliMWJ2MHNzZzJwc2plbWgwOWg3YiJ9.euPZyfb5KhJs04mKzBqCZQ'
console.log('Sending request to GeoAPI: ' + gUrl)
request( {url: gUrl, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to geocoding service")
    } else if (response.body.features.length == 0) {
        console.log("Unable to find location, Try another search")
    } else {
        const data = response.body.features[0]
        console.log('longitude ' + data.center[0])
        console.log('latitude ' + data.center[1])
    }
})
*/

/* geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
 */
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
//forecast(34.0544, -118.2439, (error, data) => {

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })