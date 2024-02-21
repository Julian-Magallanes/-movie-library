
const Movies = require ("../models/Movies")
module.exports = {
    getMovies: async () => {
        const movies = await Movies.find();
        return movies
    },
    postMovies: async (movie) => {
        const newMovie = new Movies(movie)
        const savedMovie = await newMovie.save();
        return savedMovie;
    }
}