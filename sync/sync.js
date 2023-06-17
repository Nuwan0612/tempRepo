const { readFile, writeFile } = require('fs');

console.log('start')
readFile('./Build in module/new.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }else{
        console.log(result)
    }
    const first = result

    readFile('./Intro/text2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }else {
            console.log(result)
        }
        const second = result

        writeFile('./sync/result-sync.txt', `The result: ${first}, ${second}`, (err,result)=> {
            if(err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')
