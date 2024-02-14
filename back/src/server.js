const express = require ("express");
const routerRaiz = require ("./routes/routesRoot");

const app = express();

app.use("/movies", routerRaiz)

module.exports = app;