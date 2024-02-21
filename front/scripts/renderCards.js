const cardContainer = document.getElementById("card_Container")

function renderCards(movie) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card_movies')
// optimizando codigo con innerHtml para evitar crear tantos elementos y apendear tanto
    cardDiv.innerHTML = `
        <div class="card_img">
            <img src = "${movie.poster} alt="${movie.title}"/>
        </div>
        <div class="card_list">
            <a href ="./pages/en-construccion.html">${movie.title}</a>
            <div class="card_listContent">
                <h6>Año: ${movie.year}</h6>
                <h6>Director: ${movie.director}</h6>
                <h6>Duracion: ${movie.duration}</h6>
                <h6>Generos: ${movie.genre.join(" - ")}</h6>
                <p><img src="./images/estrella.png" alt="flecha" class="card_listIcon">${movie.rate}</p>
            </div>
        </div>
    `
    cardContainer?.appendChild(cardDiv)
}
module.exports = renderCards;