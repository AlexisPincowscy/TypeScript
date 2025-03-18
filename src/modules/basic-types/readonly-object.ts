// Usando readonly em atributos

type Movie = {
    readonly title: string, // aqui não podemos alterar o título quando passarmos esse parâmetro
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


export function showMovies(movies:Movies){// ficar atento pq a type feita vvale, somente, para o parâmetro
    // movies.movie1.title = 'Novo título' maneira de alterar um atributo
    console.log(movies)
}

showMovies(movies)
movies.movie1.title = 'Novo título'
console.log(movies.movie1)
// nesse caso, eu ainda consigo selecionar, fora da função a let movies e alterar, já que o radonly está definido no type
// que fica vinculado apenas aos parâmetros da função