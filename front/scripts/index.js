
const cardContainer = document.getElementById("card_Container")

function cardGenerator(movie) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    const imgElement = document.createElement('img')
    imgElement.src = movie.poster
    imgElement.alt = movie.title

    const titleElement = document.createElement('a')
    titleElement.innerText = movie.title
    titleElement.href = "../"

    const yearElement = document.createElement('h6')
    yearElement.innerText = `Año: ${movie.year}`

    const directorElement = document.createElement('h6')
    directorElement.innerText = `Director: ${movie.director}`

    const durationElement = document.createElement('h6')
    durationElement.innerText = `Duracion: ${movie.duration}`

    const genreElement = document.createElement('h6')
    const genres = movie.genre.join(" - ")
    genreElement.innerText = `Generos: ${genres}`

    const rateElement = document.createElement('h6')
    rateElement.innerText = `Puntuacion: ${movie.rate}`

    cardDiv.append (imgElement, titleElement, yearElement, directorElement,durationElement, genreElement,rateElement)
    cardContainer.appendChild(cardDiv)
}

function movieMap(){
    for(const movie of tempData){
        cardGenerator(movie)
    }
}

movieMap()