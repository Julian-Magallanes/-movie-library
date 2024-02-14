const express = require ("express");
const controladorRaiz = require("../controllers/controllerRoot");
const routerRaiz = express.Router();

routerRaiz.get ("/movies",controladorRaiz)

module.exports = routerRaiz;