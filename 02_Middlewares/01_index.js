// ************************ MIDDLEWARE BASICO  y 2 *********************************************

const express = require('express');
const app = express();
const port = 3000;

// Cuando haces la peticion de profile, express uso la fucnion de use y mostrarnos "paso por aqui" pero no llega a la ruta por lo que no me responde, para lograr respondernos ponemos next

// ! Middleware 1 (logger)
app.use((req, res, next)=>{
    console.log(`Ruta: ${req.url} | Metodo: ${req.method}`)
    next()
})
// ! Middleware 2 (isAuthenticated)
app.use((req, res, next)=>{
    // console.log(req.query)
   if(req.query.login === 'sato@gmail.com'){
       next()  
   }else{
        res.send('No autorizado')
   }
})

app.get('/dashboard', (req, res)=>{
    res.send('Dashboard Page')
})

// ---> Todas las rutas antes de entrar al dashboard estaran protegidas; si no quiero que esten protegidas las coloco antes de la funcion use.app(middlewares)

app.get('/profile', (req, res)=>{
     res.send('Profile Send')
})
app.all('/about', (req, res)=>{
     res.send('About Send')
})

app.listen(port, ()=>{
    console.log(`Servidor de Middlewares en el puerto ${port}`)
})