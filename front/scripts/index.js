const renderCards = require ("./renderCards")
const axios = require ('axios')


/*$.get(`https://students-api.2.us-1.fl0.io/movies`,(DataMovies, status) =>{
    if (status==="success"){
        DataMovies.map(movie =>renderCards(movie))
        }
     else {
        alert("Error")
    }
})
*/
async function getMovies(){
    try{
    const{data} =  await axios.get(`https://students-api.2.us-1.fl0.io/movies`)
    data.map(movie =>renderCards(movie))
    } catch (error) {
    console.log(error.message)
    }
}
getMovies();