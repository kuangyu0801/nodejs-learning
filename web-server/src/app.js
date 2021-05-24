const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))



// create a express object
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// setup handlerbars engine to express with dynamic page
// express: https://expressjs.com/
app.set('view engine', 'hbs')
// setup view path
app.set('views', viewPath)
// run with command: nodemon src/app.js -e js.hbs for monitoring both .js and .hbs file changes
hbs.registerPartials(partialPath)

// using static html file 
app.use(express.static(publicDirectoryPath))

// setting current date variable
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const date = mm + '/' + dd + '/' + yyyy;
// rendering root page with template index
app.get('', (req, res) => {
    // using template with object injection
    res.render('index', {
        title: 'Weather App',
        name: 'Kuang-Yu Li',
        date
    })
})

// rendering About page with template index
app.get('/about', (req, res) => {
    // using template with object injection
    res.render('about', {
        title: 'Weather App',
        name: 'Kuang-Yu Li',
        date
    })
})

// rendering About page with template index
app.get('/help', (req, res) => {
    // using template with object injection
    res.render('help', {
        title: 'Weather App',
        name: 'Kuang-Yu Li',
        path: viewPath, 
        date
    })
})

// using wildcard to handle not matched page w/ 404
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kuang-Yu Li',
        errorMessage: 'Help article not found',
        date
    })
})

app.get('/weather', (req, res) => {
    res.send({forecast: 'rainy',
            location: 'Boston'})
})

// handler not matched page w/ 404
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kuang-Yu Li',
        errorMessage: 'Page not found',
        date
    })
})

// starting the server
app.listen(3000, () => {
    console.log('Sever is up on port 3000')
})