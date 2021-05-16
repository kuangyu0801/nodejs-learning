const request = require('postman-request') 

const geocode = (address, callback) => {
    const gUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic3QxNjk5NzEiLCJhIjoiY2tvcTliMWJ2MHNzZzJwc2plbWgwOWg3YiJ9.euPZyfb5KhJs04mKzBqCZQ'
    request( {url: gUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined)
        } else if (response.body.features.length == 0) {
            callback('Unable to find location, Try another search!', undefined)
        } else {
            const data = response.body.features[0]
            callback(undefined, {
                latitude: data.center[0],
                longitude: data.center[1],
                location: data.place_name
            })
        }
    })
}

module.exports = geocode