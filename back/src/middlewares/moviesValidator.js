module.exports = (req, res, next) => {
    const {title, year, director, duration, genre, rate, poster} = req.body;
    if (!title || !year || !director || !duration || !genre[0] || !rate || !poster){
        throw Error ("Middleware: Faltan datos")
    }
    next();
}