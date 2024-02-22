const {postMovies} = require ("../../services/movieService")

module.exports = {
    postMovies: async (req, res) =>{
    try {
        const { title, year, director, duration, genre, rate, poster} = req.body;
        const savedMovie = await postMovies({
          title, year, director, duration, genre, rate, poster
        })
        res
          .status(201)
          .json(savedMovie);
      } catch (error) {
        res
          .status(500)
          .json({
            message: "Error al obtener los datos",
            error: error.message
          })
      }
}
}