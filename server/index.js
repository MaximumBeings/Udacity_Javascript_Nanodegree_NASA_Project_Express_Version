const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const app = express()
const port = 3000

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// setup the express assets path
app.use('/', express.static(path.join(__dirname, '../client')))

// API calls ------------------------------------------------------------------------------------
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/index.html'));
})

app.get('/index.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/index.html'));
})


app.get('/apod_2.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/apod_2.html'));
})

app.get('/apodModal.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/apodModal.html'));
})

app.get('/opportunity_2.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/opportunity_2.html'));
})

app.get('/spirit_2.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/spirit_2.html'));
})

app.use(function (req, res) {
    res.status(404).sendFile(path.join(__dirname, '../client/pages/error.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
