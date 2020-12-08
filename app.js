// var time = 0;

// setInterval(function() {
//     time +=2; 
//     console.log(time +'3 secs passed');
//     if( time > 5) 
//     clearInterval(timer);
// }, 2000)


// // check dir & fname
// console.log(__dirname)
// console.log(__filename)


// // functions
// function callFunction(fun){
//     fun();
// }

// // normal function
// function sayHi() {
//     console.log('HI');
// }

// sayHi();

// // function expression
// var sayBye =  function(){
//     console.log('bye');
// }

// sayBye();

// callFunction(sayBye);

var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));