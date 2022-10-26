const express = require("express");
const app = express();
const port = 3000;

// !QUERIES:
// -Informacion para la URL
// Declaracion de variable, informacion extra que el navegador puede enviar al backend para hacer una operacion adicional

app.get('/search/',(req, res)=>{
    console.log(req.query)
   if(req.query.q === 'javascript modules'){
        res.send('JavaScript Modules')
   }else{
       res.send('Default')
   }

})

app.listen(port, () => {
  console.log(`Servidor HTTP Queries Body desde ${port}`);
});
