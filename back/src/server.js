const express = require ("express");
const routerMovies = require ("./routes/routesMovies");
const morgan = require ("morgan")
const cors = require ("cors")

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

app.use( routerMovies)



module.exports = app;