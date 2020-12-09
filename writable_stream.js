var http =  require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); //read file
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:'); // collect chunks and log into console
    myWriteStream.write(chunk); //send the chunk into new file
});


// var server = http.createServer(function(req, res){
//     console.log('request was made:' +req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey Ninjas');
// });


// server.listen(3000, '127.0.0.1');
// console.log('Yo dqgs, now listening to port 3000');