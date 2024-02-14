const controladorRaiz = (req, res) =>{
    const mensaje = "próximamente estarán disponibles los datos de películas.";

    res.send (mensaje);
};

module.exports = controladorRaiz;