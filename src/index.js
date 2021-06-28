require("dotenv").config();
const express = require('express');
const cors = require('cors');

// inicializaciones 
const app = express();

// --------------
app.use(cors());
app.use(express.json());
// Rutas
app.use(require('./rutas/empleados .js'));

// inicializar servidor 

app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log(`Servidor corriendo en port http://localhost:${process.env.NODE_DOCKER_PORT}`)
});

module.exports = app;