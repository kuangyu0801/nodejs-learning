const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

// create a express object
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

// using static html file 
app.use(express.static(publicDirectoryPath))

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