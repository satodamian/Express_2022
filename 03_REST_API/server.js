const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Para que los datos realmente se guarden hay que usar un archivo independiente, no en un arreglo
// La finalidad de esta seccion es realizar un seguimiento de las peticiones http de express
let products = [
    {
        id: 1,
        name: 'laptop',
        price: 1500
    },
    {
        id: 2,
        name: 'pc',
        price: 1780
    }
];

app.use(morgan('dev'))
// Para que funcione el metodo post
app.use(express.json())

app.get('/products', (req, res)=>{
    res.json(products)
})
app.post('/products', (req, res)=>{
    // console.log({...req.body, id: products.length+1})
    const newProduct = {id: products.length+1,...req.body};
    products.push(newProduct)
    res.send(newProduct)
})

app.put('/products/:id', (req, res)=>{
    // res.send('Actualizar producto')
    // console.log("valor:" , req.params.id)
    const newData = req.body //{name: TEXT; price: NUMBER}

    const valor = products.find((product)=>{
        return product.id == req.params.id;
 })
    
    if(!valor){
        return res.status(404).json({
            message: 'Not found'
        })
    }
    // No lo estoy guardanado
    // const newProduct = products.map((product)=>product.id === parseInt(req.params.id) ? {...product, ...newData} : product) 
    // !Para guardarlo es necesario adjuntarlo hacia el arreglo inicial
    products = products.map((product)=>product.id === parseInt(req.params.id) ? {...product, ...newData} : product) 
    console.log(products);

    res.json({
        message: 'Producto actualizado exitosamente'
    })
})

app.delete('/products/:id', (req, res)=>{
    console.log("valor:" , req.params.id)

    const valor = products.find((product)=>{
        return product.id == req.params.id;
 })
    
    if(!valor){
        return res.json({
            message: 'Not found'
        })
    } 
    const newProducts = products.filter((product)=>{
           return product.id !== parseInt(req.params.id)
    })
      

    res.json(newProducts)
})
app.get('/products/:id', (req, res)=>{
    console.log("valor:" , req.params.id)
    const valor = products.find((product)=>{
           return product.id == req.params.id;
    })
        
  
    if(!valor){
        return res.json({
            message: 'Not found'
        })
    }

    res.json(valor)
})

app.listen(port, ()=>{
    console.log(`Server en Puerto ${port}`)
})