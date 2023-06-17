const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./Build in module/New.txt', 'utf8')
const second = readFileSync('./Intro/text2.txt', 'utf8')

writeFileSync('./sync/result2-sync.txt',
`The result: ${first}, ${second} `)

console.log('done with this task')
console.log('starting the next one')