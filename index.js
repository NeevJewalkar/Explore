const express = require('express')
const path = require('path')
let app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/views/'));
app.use( express.static( "public" ) );

app.get('/home', (req, res) => {
    res.render('home.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.listen(3003)