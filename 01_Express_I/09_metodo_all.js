const express = require("express");
const app = express();
const port = 3000;

// Esta ruta funciona con cualquier metodo HTTP (get, post, put, etc)
app.all('/info', (req, res)=>{
    res.send('Server Info')
})

app.get('/search/',(req, res)=>{
    console.log(req.query)
   if(req.query.q === 'javascript modules'){
        res.send('JavaScript Modules')
   }else{
       res.send('Default')
   }

})

app.listen(port, () => {
  console.log(`Servidor HTTP Para Metodo aLL Body desde ${port}`);
});
