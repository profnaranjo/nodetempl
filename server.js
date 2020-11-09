const express = require('express');
//const exphbs = require('express-handlebars');

const app = express();

app.set('view engine', 'pug')

app.get('/', function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!', pagep1: "This is my first pug template" })
})

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});