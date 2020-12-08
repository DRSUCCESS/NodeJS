var events = require('events')
// UTIL MODULE allows us to inherit something from nodeJs obj to another obj
var util = require('util');

var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var brown = new Person('brown');
var people = [james, mary, brown];

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + ' said: ' + msg)
    });
});

james.emit('speak', 'hey dudes'); 
mary.emit('speak', 'want a cury');