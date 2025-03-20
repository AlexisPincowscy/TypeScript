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
};
export function showMovies(movies) {
    console.log(movies);
}
showMovies(movies);
