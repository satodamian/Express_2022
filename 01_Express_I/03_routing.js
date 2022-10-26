// Servidor creado para leer un documento de HTML con Express

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.end('<h1>Hola Mundo</h1>')
})
app.get('/profile', (req, res)=>{
    res.send('Pagina de perfil')
})
app.get('/weather', (req, res)=>{
    // Mejor forma de devolver un resultado y estado
    return res.status(200).end(`<h1>Weather's Nice</h1>`)
})

// USE: Al momento de entrar a una ruta no especificada, osea que no esta dentro de las definiciones de app.get
app.use((req, res)=>{
    return res.status(404).end('Not FOund')
})

app.listen(port, ()=>{
    console.log(`Servidor desde ${port}`)
})

