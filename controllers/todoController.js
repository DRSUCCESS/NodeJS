var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb+srv://servenig_db:serve1212@cluster0.k0m5s.mongodb.net/todo?retryWrites=true&w=majority', { useUnifiedTopology: true }, { useNewUrlParser: true })


// create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String //create a string schema
});

var Todo = mongoose.model('Todo', todoSchema); //create a new model and pass it to schema
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
    if(err) throw err;
    console.log('item saved'); //save to mongodb
}) // create new Todo schema

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    app.get('/todo', function (req, res) {
        res.render('todo', {todos: data});
    });
    
    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body); // use push to add data
        res.json(data); //return the data to client-side
    });

    app.delete('/todo/:item', function(req, res){
        // filter(delete) data if formatted string has a space replacement of '-'
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
};