const request = require('postman-request') 

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=808b55fed3f288bf11c87b4cc8850d79&query=' + latitude + ',' + longitude
    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)                
        } else if (body.error) {
            callback('Unable to find location', url)
        } else {
            const data = body.current
            callback(undefined, data.weather_descriptions[0])
            callback(undefined, 'It is currently ' + data.temperature + '. It feels like ' + data.feelslike + ' out')
            callback(undefined, 'There is a ' + data['precip'] + ' % probability of rain')
        }
    })
}

module.exports = forecast