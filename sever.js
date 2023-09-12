/*
Creamos server.js
terminal: npm init -y (Crea el package.json)
Editar package.son -> "start": "nodemon server.js"
terminal: npm install express mongoose cors
Crear siguientes carpetas:
   -server
        -config
        -controllers
        -models
        -routes
----------------
terminal: npx create-react-app client
Esperar a que diga Happy Hacking
terminal: cd client
npm install axios react-router-dom
*/

const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de React
        origin: "http://localhost:3000"
    })
)

//Inicializar la BD
require("./server/config/mongoose.config");

//Importar Rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, ()=>console.log("Servidor listo !"));