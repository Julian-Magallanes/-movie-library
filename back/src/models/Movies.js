const mongoose = require ("mongoose")

const moviesSchema = new mongoose.Schema ({
    title: {
        type:String,
        required: true,
        unique:true
    },
    year: Number,
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: String
})
const Movies = mongoose.model("Movies", moviesSchema)
module.exports = Movies;