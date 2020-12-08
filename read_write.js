 var fs = require('fs');
 
 fs.mkdir('stuff', function(){
     fs.readFile('readme.txt', 'utf8', function (err, data) {
         console.log('readme data is: ' +data);
         if (err) console.log('error', err);

         fs.writeFile('./stuff/writeme_stuff.txt', data, function (err, result) {
             if (err) console.log('error', err);
         });
     });

});