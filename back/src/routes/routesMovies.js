const {Router} = require ("express");
const {getMovies, postMovies} = require("../controllers/controllerMovies");
const moviesValidator = require("../middlewares/moviesValidator");
const routerMovies = Router();

routerMovies.get ("/movies",getMovies)
routerMovies.post ("/movies",moviesValidator, postMovies)

module.exports = routerMovies;