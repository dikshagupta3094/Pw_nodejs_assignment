
const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('<P>I am happy to learn full stack web development from PW skills</P>')
    res.end()
})

server.listen(5002)
console.log("The http server port number running on 5002");