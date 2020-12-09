var express = require('express');

var app = express();

app.set('view engine', 'ejs');

// use render for 'views', sendFile for 'html' 
// sendFile for 'html' needs full dir e.g res.sendFile(__dirname, PATH)
// render for 'views' needs only path_name e.g. res.render('index')
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/profile/:name', function (req, res) {
    var data = {age: 29, job: 'ninja',  hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
