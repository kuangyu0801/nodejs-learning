const { errorMonitor } = require('events')
const https = require('https')
const url = 'https://api.weatherstack.com/current?access_key=808b55fed3f288bf11c87b4cc8850d79&query=45,-75'

const request = https.request(url, (response) => {
    let data = ''
    // handler
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', () => {
    console.log('An error', error)
})

request.end()


