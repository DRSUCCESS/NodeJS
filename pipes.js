var http =  require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made:' +req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); //read file
    var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
    myReadStream.pipe(res);//get data from readable string to the client (res obj)

});


server.listen(3000, '127.0.0.1');
console.log('Yo dqgs, now listening to port 3000');
