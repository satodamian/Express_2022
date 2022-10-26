// Servidor creado para leer un documento de HTML con Express

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    return res.sendFile('./static/index.html',{
        root: __dirname
    })
})

app.listen(port, ()=>{
    console.log(`Servidor desde ${port}`)
})

