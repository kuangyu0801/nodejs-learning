const express = require('express')

const app = express()
app.get('', (req, res) => {
    // return html
    res.send('<h1>Hello express</h1>')
})

app.get('/help', (req, res) => {
    // return json
    res.send([{
        name: 'Kuang-Yu',
        age: 27
    },{name: 'Sarah'}])
})

app.get('/about', (req, res) => {
    res.send('<h1>You\'re viewing the about page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({forecast: 'rainy',
            location: 'Boston'})
})

// app.com
// app.com/help
// app.com/about

// starting the server
app.listen(3000, () => {
    console.log('Sever is up on port 3000')
})