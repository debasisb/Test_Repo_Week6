const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! This is the main page - DebasisB!'))

app.get('/contact', (req, res) => res.send('This is the contact page - Contact!'))

app.get('/news', (req, res) => res.send('This is the news page - News!'))

app.get('/about', function (req, res) {
    res.send('This is a the bio page - About!');
});

//write a separate page about /products
// send a simple message to this route
//This is just a useless comment
//adding nothing to this code and doing a pull request jenr

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
