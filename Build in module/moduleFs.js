const path = require('path');
console.log(__dirname);

const  {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./Intro/text2.txt', 'utf8');
const second = readFileSync('./Build in module/New.txt', 'utf8');
console.log(first);
console.log(second);

const dirName = path.dirname(__dirname)

writeFileSync(path.join(__dirname, 'result.txt'), `Here is the message: ${first}  ${second}`);