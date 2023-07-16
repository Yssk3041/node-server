// servidor Express

const express = require('express');
const app = express();
const port = 3000;
const host = "localhost";

// Definir la lista de tareas
const tasks = [
    { id: 1, descripcion: 'Organizar menu de la semana', estado: "pendiente" },
    { id: 2, descripcion: 'Revisar los compromisos de la semana', estado: "completado" },
    { id: 3, descripcion: 'Estudiar Node.js', estado: "pendiente" }
  ];


app.get('/', (req, res)=>{
    res.status(200).send(tasks);
  } )

app.listen(port, host, ()=>{
    console.log("Servidor encendido");
})

