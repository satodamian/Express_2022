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

// Metodos de peticion que permite entender lo que mande el cliente (facilidad de interpretar por parte de express)
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false})) //Entender datos enviados desde un formulario

app.post('/user', (req, res)=>{
    // Req es informacion del cliente, yo deseo ver el contenido de la peticion del cliente.
    console.log(req.body)
    res.send('Nuevo usuario creado');
})


app.listen(port, () => {
  console.log(`Servidor HTTP Request Body desde ${port}`);
});
