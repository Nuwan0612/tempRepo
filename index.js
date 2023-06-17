const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Home Page')
        return
    }

    if(req.url === '/about') {
        for(let i = 0; i < 100; i++) {
            for(let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
        return
    }
    res.end('Error page')
})

server.listen(5000, ()=>{
    console.log('server Listening on port 5000...')
})