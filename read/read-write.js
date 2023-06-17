//const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'hello.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'hello.txt')); //dlete a file

        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    }catch (err) {
        console.log(err);
    }
}

fileOps();

/*fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});*/

/*fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log('write complete');

    fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nyes it is', (err) => {
        if (err) throw err;
        console.log('Append complete');

        fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newreply.txt'), (err) => {
            if (err) throw err;
            console.log('rename complete');
        });
    });
});*/

/*fs.appendFile(path.join(__dirname, 'test.txt'), 'Testing text', (err) => {
    if (err) throw err;
    console.log('Append complete');
});

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});*/