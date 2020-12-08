var counter = function (arr) {
    return 'There are ' + arr.length + ' elements in this array';
}

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
}


var pi = 3.142;


// module mtd 1: set function into 'var' and export later
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


// module mtd 2: export module directly with function
// module.exports.counter  = function(){} //or var
// module.exports.adder = function(){} //or var
// module.exports.pi = function(){} //or var


// module mtd 3: rewrite mtd1 in mature manner
module.exports = {
    counter: counter,
    adder: adder,
    pi:pi
}