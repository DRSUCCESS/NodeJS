var fs = require('fs')

//Sync means read this file before running below codes
var readme = fs.readFileSync('readme.txt', 'utf8'); // read file 
fs.writeFileSync('writeme.txt', readme) // create & write to another file

// code