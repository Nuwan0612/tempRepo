const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'read', 'hi.txt'), {encding: 'utf8'});

const ws = fs.createWriteStream(path.join(__dirname, 'read', 'new-hi.txt'));

/*rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})*/

rs.pipe(ws);