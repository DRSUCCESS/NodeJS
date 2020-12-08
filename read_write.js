var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function (err, data) {
    fs.writeFile('writeme.txt', data, function (err, result) {
        if (err) console.log('error', err);
    });
});