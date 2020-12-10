var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false }) //middleware from body-parser



app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff')); //static files

/*
// Middleware: is any code between res& req
app.use('/assets', function(req, res, next){
    console.log(req.url);
    next(); // to move on to the next middleware
}); //fire assets anywhere code is access
*/



// use render for 'views', sendFile for 'html' 
// sendFile for 'html' needs full dir e.g res.sendFile(__dirname, PATH)
// render for 'views' needs only path_name e.g. res.render('index')


app.get('/', function (req, res) {
    res.render('index');
});



app.get('/contact', function (req, res) {
    res.render('contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body); //post data to the body urlencodedParser
    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', function (req, res) {
    var data = {age: 29, job: 'ninja',  hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
