const {Router} = require ("express");
const controladorMovies = require("../controllers/controllerMovies");
const routerMovies = Router();

routerMovies.get ("/movies",controladorMovies)

module.exports = routerMovies;