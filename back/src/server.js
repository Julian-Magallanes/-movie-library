const express = require ("express");
const routerMovies = require ("./routes/routesMovies");

const app = express();

app.use( routerMovies)


module.exports = app;