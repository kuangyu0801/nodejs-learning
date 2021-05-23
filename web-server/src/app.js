const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))



// create a express object
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

// setup handlerbars engine to express with dynamic page
// express: https://expressjs.com/
app.set('view engine', 'hbs')
// setup view path
app.set('views', viewPath)
// using static html file 
app.use(express.static(publicDirectoryPath))

// rendering root page with template index
app.get('', (req, res) => {
    // using template with object injection
    res.render('index', {
        title: 'Weather App',
        name: 'Kuang-Yu Li'
    })
})

// rendering About page with template index
app.get('/about', (req, res) => {
    // using template with object injection
    res.render('about', {
        title: 'Weather App',
        name: 'Kuang-Yu Li'
    })
})

// rendering About page with template index
app.get('/help', (req, res) => {
    // using template with object injection
    res.render('help', {
        title: 'Weather App',
        name: 'Kuang-Yu Li',
        path: viewPath
    })
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