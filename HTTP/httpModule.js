const http = require('http')

// req - what require from the client to server
// res -rensponse to client from server

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is our short history')
}

res.end(`
<h1>Oops!</h1>
<p>We cant seem to find the page yoou are looking for</p>
<a href="/">back home</a>`)

})

// what port the server  going to listen
server.listen(5000)