const axios = require("axios");
 function validateFormContent ({
    title, year, director, duration, genre, rate, poster
 }){
    if(!title || !year || !director || !duration || !genre[0] || !rate || !poster)
        return "Completar todos los campos"
    if(year > 1895 || year < new Date().getFullYear())
    if(director.length < 4 )
        return "El nombre del director es muy corto, debe tener mas de 4 caracteres"
    if(director.length > 30)
        return "El nombre del director es muy largo, debe tener menos de 30 caracteres"
    if(isNaN(rate) || rate < 1 || rate > 10)
        return "La calificacion debera ser entre 1 y 10"
    if(!poster.includes("https://"))
        return "La url no contiene el formato correspondiente"
    return null
}
 
 
 
 function createMovie(event){
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value.split(" ");
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    const newMovie = { title, year, director, duration, genre, rate, poster}
 
    const error = validateFormContent ({ title, year, director, duration, genre, rate, poster})
    if(error) return alert(error)

    //return alert ("La pelicula fue creada exitosamente");
    axios
        .post("http://localhost:3000/movies", newMovie)
        .then (() => alert ("La pelicula fue creada exitosamente"))
        .catch ((error) => alert ("No se pudo compleetar el porceso"));

}


module.exports = createMovie
