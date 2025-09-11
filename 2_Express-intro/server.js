const express = require('express')
const server = express()

server.set("view engine", "ejs")

server.get('/', (req, res) => {
    res.render('index')
})
server.get('/about', (req, res) => {
    res.render('about')
})
server.get('/service', (req, res) => {
    res.render('services')
})
server.get('/blog', (req, res) => {
    res.render('blog')
})
server.get('/contact', (req, res) => {
    res.render('contact')
})

let port = 8000;

server.listen(port, () => {
    console.log(`Server running on  http://localhost:${port}`)
})
