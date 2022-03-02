// console.log(__dirname, __filename)

// const _ = require('lodash')

// console.log(_.chunk(['a', 'b', 'c', 'd'], 5))
// console.log(_.compact([true, 10, 0, NaN, 0, "", 12365]))

const http = require('http')

const server = http.createServer((req, res)=>{
    // res.end("<h1>Hello word</h1>")
    // console.log({req: req.url})

    switch (req.url) {
        case "/":
            res.end("<h1>Hello word</h1>")
            break;

        case "/fr":
            res.end("<h1>Bonjour</h1>")
            break;
        case "/an":
            res.end("<h1>Hi</h1>")
            break;
        case "/esp":
            res.end("<h1>Ola</h1>")
            break;
    
        default:
            res.end("<h1>Oups error :'( </h1>");
    }
})

server.listen(5000, ()=>{
    console.log("The server is running on port 5000")
})

