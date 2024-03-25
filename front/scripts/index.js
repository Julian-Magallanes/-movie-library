const renderCards = require ("./renderCards")
const createMovie = require ("./createMovie")
const axios = require ('axios')

async function getMovies(){
    try{
    const{data} =  await axios.get("http://localhost:3001/movies")
    data.map(movie =>renderCards(movie))
    } catch (error) {
    console.log(error.message)
    }
}

document.addEventListener ("DOMContentLoaded", () => {
    getMovies();
    const submit = document.getElementById("submitForm");
    submit?.addEventListener("click", createMovie);
})
