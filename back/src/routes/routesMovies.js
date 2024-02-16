const {Router} = require ("express");
const {getMovies} = require("../controllers/controllerMovies");
const routerMovies = Router();

routerMovies.get ("/movies",getMovies)

module.exports = routerMovies;