// Servidor creado para leer un documento de HTML con Express

const express = require('express');
const app = express();
const port = 3000;

// ! GET
app.get('/products', (req, res)=>{
    return res.send('Lista de productos')
})

// ! POST
app.post('/products', (req, res)=>{
    return res.send('Creando productos')
})

// ! PUT
app.put('/products', (req, res)=>{
    return res.send('Actualizando un producto')
})

// ! DELETE
app.delete('/products', (req, res)=>{
    return res.send('Eliminar producto')
})

// ! PATCH
app.patch('/products', (req, res)=>{
    return res.send('Actualizando una parte del producto')
})


app.listen(port, ()=>{
    console.log(`Servidor HTTP Methods desde ${port}`)
})

