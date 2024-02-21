const {Router} = require ("express");
const {getMovies, postMovies} = require("../controllers/controllerMovies");
const routerMovies = Router();

routerMovies.get ("/movies",getMovies)
routerMovies.post ("/movies",postMovies)

module.exports = routerMovies;