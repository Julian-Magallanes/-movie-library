
const cardContainer = document.getElementById("card_Container")

function cardGenerator(movie) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
// optimizando codigo con innerHtml para evitar crear tantos elementos y apendear tanto
    cardDiv.innerHTML = `
    <img src = "${movie.poster} alt="${movie.title}"/>
    <a href ="../">${movie.title}</a>
    <div class="card_list">
        <h6>Año: ${movie.year}</h6>
        <h6>Director: ${movie.director}</h6>
        <h6>Duracion: ${movie.duration}</h6>
        <h6>Generos: ${movie.genre.join(" - ")}</h6>
        <p>${movie.rate}</p>
    </div>
    `
    cardContainer.appendChild(cardDiv)
}


$.get(`https://students-api.2.us-1.fl0.io/movies`,(DataMovies, status) =>{
    if (status==="success"){
        DataMovies.map(movie =>cardGenerator(movie))
        }
     else {
        alert("Error")
    }
})
