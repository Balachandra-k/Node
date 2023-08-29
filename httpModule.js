// http module

const http = require('http')

let port = 5000 // 4 digts

// aplication /json => json type of response
//aplication/plain => dowenlodable of text file
//text//plain => text type of resopence
//text/html => html type of resopence

const server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type': "text/plain"})
    res.end('<div><h1>Welcome to node js</h1><p>lorem textnakcncncdnclncwecbewcbejcbqe.cqekcjbqelcg</p></div>')
})

server.listen(port,()=> {
    console.log(`serever i srunning @ http://localhost:${port}`);
})