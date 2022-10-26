// Servidor creado para leer un documento de HTML con Express

// !NOTAS:
// Cuando enviamos un dato por medio de post, es pensar como un documento y este tiene un contenido de formato json y una cabecera que es para dar informacion del contenido que estoy enviando, siendo su estructura
// {
        // RUTA -> Endpoint
        // Header -> Json
        // Contenido -> Body
// }

const express = require("express");
const app = express();
const port = 3000;

// Parametro dinamico /:
app.get('/hello/:user', (req, res)=>{
    // console.log(req.params.user)
    // console.log(typeof req.params.user)
    res.send(`Hello ${req.params.user.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res)=>{
//    console.log(req.params.x);
//    console.log(req.params.y);
    const {x,y} = req.params
   const result = parseInt(x) + parseInt(y)
   res.send(`La suma es: ${result}`)
})

app.get('/users/:username/photo', (req, res)=>{
    if(req.params.username === 'santi'){
        return res.sendFile('./assets/duck.gif',{
            root: __dirname,
        });
    }

    res.send('El usuario sin acceso')
})

app.get('/nombre/:nombre/age/:age', (req, res)=>{
    console.log(req.params)
    res.send(`El usuario es ${req.params.nombre} y tiene ${req.params.age} años`)
})



app.listen(port, () => {
  console.log(`Servidor HTTP Params Body desde ${port}`);
});
