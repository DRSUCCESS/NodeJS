var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb+srv://servenig_db:serve1212@cluster0.k0m5s.mongodb.net/todo?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });


// create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String //create a string schema
});

var Todo = mongoose.model('Todo', todoSchema);

// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

    app.get('/todo', function (req, res) {

        // get data from mongodb & pass it to view
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', { todos: data }); // render it to 'todo' data

        }); //find all items in a (Todo) collection
    });
    
    app.post('/todo', urlencodedParser, function(req, res) {

        // get data from the view & add it to mondodb
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });


    app.delete('/todo/:item', function(req, res){

        // delete requested item form mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if (err) throw err;
            res.json(data);
        }); // replace '-' with ' ' 
    });
};