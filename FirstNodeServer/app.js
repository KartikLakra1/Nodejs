const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('Request made to the server');
    fs.appendFile('log.txt', `Request made at: ${new Date().toString()} with IP address ${res.socket.remoteAddress}\n`, (err)=>{
        if(err){
            console.error('Error writing to log file',err);
        }else console.log('Log updated');
    })
})


const PORT = 3000;

server.listen(PORT , ()=>{
    console.log(`Server is listening on http://129.0.0.1:${PORT}`)
})