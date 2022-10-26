// Servidor creado para leer un documento de HTML con Express

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello World");
});

// ! I. Forma de Responder
app.get("/miarchivo", (req, res) => {
  res.sendFile("./assets/duck.gif", {
    // La raiz donde vas a empezar a buscar (Disco Duro)
    root: __dirname,
  });
});

// ! II. Forma de Responder
app.get("/user", (req, res) => {
  res.json({
    user: "Sato",
    last_name: "Damian",
    age: 23,
    carrer: "System Enginner",
    address: {
      city: "Wall Street",
      number: 123,
    },
    points: [12, 31, 32, 11, 15],
  });
});

app.get("/isalive", (req, res) => {
    res.sendStatus(204);
  });
  

app.listen(port, () => {
  console.log(`Servidor HTTP Response desde ${port}`);
});
