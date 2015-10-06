var counter1 = require('./counter');
var counter2 = require('./counter');
var copier = require('./copy');

// test - counter - don't init twice.
console.log(counter1.counter());
console.log(counter2.counter());
console.log(counter2.counter());

var travel = require('./travel');
travel.travel('C:\\users\\ibm_admin\\dan\\workspace', function (pathname) {
  console.log(pathname);
});
