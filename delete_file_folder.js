 var fs = require('fs');
 
//  use function to boycott 'err'
fs.unlink('./stuff/writeme_stuff.txt', function () { 
    fs.rmdir('stuff', function () { });
});