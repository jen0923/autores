const mongoose = require("mongoose"); // codigo para conexion de Base de datos

mongoose.connect("mongodb://localhost/autores_cr", { // despues de los : (//localhost/autores_cr" o 127.0.0.1.27017) ponemos el nombre o esquema que necesitemos por eso coloque autores porque asi se llama mi base de datos
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado a DB"))
    .catch(err => console.log("Error al conectarse a DB", err));