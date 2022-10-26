// Servidor creado para leer un documento de HTML con http y fs (Sin Express)

const http = require('http');
const fs = require('fs');

const port = 3000;


const server = http.createServer((req,res)=>{
    const read = fs.createReadStream('./static/index.html')
    // Para enviarlo utilizamos a pipe y este envia a response
    read.pipe(res)
})

server.listen(port, ()=>{
    console.log(`Se ejecuta en el puuerto ${port}`)
})