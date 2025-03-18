// index signature serve para criar um tipo de varlo variável.
// Vc define o tipo da chave e quais tipos de valor ela pode receber
// E funciona com a interação de objetos, o paradigma inherit 
type Movie = {
    title: string,
    year: number,
    [key: string]: string|number|boolean
}

type Movies = {
    [key: string]: Movie
}

let movies = {
    movie1: {
        title: 'A origem',
        year: 2019,
        isFavorite: true,
        genre: 'Ficção',
        director: 'Chistropher Nolan'
    },
    movie2: {
        title: 'Um sonho de liberdade',
        year: 1994,
        isFavorite: true,
        genre: 'Drama',
        runtime: 142
    },
    movie3: {
        title: 'The Gosfather',
        year: 1972,
        isFavorite: false,
        genre: 'Crime-Police'
    }
}


export function showMovies(movies:Movies){
    console.log(movies)
}

showMovies(movies)