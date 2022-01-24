const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome')    
    }
    if(req.url === '/about') {
        res.end('Welcome to the about page')    
    }
    res.end(
        `<h1>Ooops!</h1>
        <p>We can not find the page you are looking for</p>
        <a href ="/">back</>
        `
    )
})

server.listen(5000);