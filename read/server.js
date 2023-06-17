//console.log('Hello world');

//imports
const os = require('os'); 
const path = require('path');
const math = require('./math'); // import math
const { add, subtract, multiply, divide } = require('./math'); // destructring


console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename)); //directory name same as console.log(__dirname)
console.log(path.basename(__filename)); // base name of the file 'server.js'
console.log(path.extname(__filename)); // extention of the file

console.log(path.parse(__filename)); // give details in object

/*console.log(math.add(5, 9)); // when no destructering
console.log(add(9, 4)); // when destructering
console.log(subtract(9, 4));
console.log(multiply(9, 4));
console.log(divide(8, 4));*/