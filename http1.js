const http = require('http')
const port = 5400

const server = http.createServer(function(req,res){
    //req.url => to read path from the broweser

    switch(req.url){
case "/":
        res.end(`<div>
                        <nav>
                        <a href=""/>Home</a>
                        <a href=""/>About</a>
                        <a href=""/>content</a>
                        <a href=""/>login</a>
                                </nav>
                                <h1>Home Page</h1>
                        </div>`)
                        break;
case "/about":
                            res.end(`<div>
                                            <nav>
                                            <a href=""/>Home</a>
                                            <a href=""/>About</a>
                                            <a href=""/>content</a>
                                            <a href=""/>login</a>
                                                    </nav>
                                                    <h1>About Page</h1>
                                            </div>`)
                                            break;

case "/content":
        res.end(`<div>
                        <nav>
                        <a href=""/>Home</a>
                        <a href=""/>About</a>
                        <a href=""/>content</a>
                        <a href=""/>login</a>
                                </nav>
                                <h1>Content Page</h1>
                        </div>`)
                        break;
 default:
        res.end(`<div>
                        <nav>
                        <a href=""/>Home</a>
                        <a href=""/>About</a>
                        <a href=""/>content</a>
                        <a href=""/>login</a>
                                </nav>
                                <h1>Page Not found</h1>
                        </div>`)
                        break;
    }
})
server.listen(port,function(){
    console.log(`server is running http://localhost:${port}`)
})