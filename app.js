var express = require('express');
var todoController = require('./controllers/todoController');
var app = express(); //set up app using express

app.set('view engine', 'ejs'); // setup template engine using ejs

app.use(express.static('./public')) // static files using middleware

todoController(app); // fire controllers

// localhost:3000/assets/styles.css
app.listen(3000); // listen to port
console.log('You are listening to port 3000');