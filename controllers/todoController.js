var bodyParser = require('body-parser');
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