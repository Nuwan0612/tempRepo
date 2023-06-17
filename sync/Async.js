//const {readFile, writeFile} = require('fs')
const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// This is when using  getText
/* const getText = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

getText('./read/test.txt')
    .then((result) => console.log(result))
    .catch((err)=> console.log(err)) 

const start = async() => {
    try {
        const first = await getText('./read/test.txt');
        const second = await getText('./read/hi.txt');
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
    
} */


//This is when using util
/* const start = async() => {
    try {
        const first = await readFilePromise('./read/test.txt', 'utf8');
        const second = await readFilePromise('./read/hi.txt', 'utf8');
        await writeFilePromise('./Promises-result.txt', 'This is awesome')
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
    
} */

//This is when using Promisses
const start = async() => {
    try {
        const first = await readFile('./read/test.txt', 'utf8');
        const second = await readFile('./read/hi.txt', 'utf8');
        await writeFile('./Promises-result.txt', 'This is awesome')
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
    
}

start()