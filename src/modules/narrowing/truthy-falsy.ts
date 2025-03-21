export const bootstrap = (): void =>{
    // testar Truthy or Falsy serve para fazer bons type guards

    //  Falsy
    console.log(false ? 'Truthy' : 'Falsy'); // if ternário condição ? se verdade : se falso
    console.log(0 ? 'Truthy' : 'Falsy');
   // console.log('' ? 'Truthy' : 'Falsy'); sempre falsy, só aspas
   // console.log(null ? 'Truthy' : 'Falsy'); sempre falsy
   // console.log(undefined ? 'Truthy' : 'Falsy');
    console.log(NaN ? 'Truthy' : 'Falsy');

    // Truthy
    console.log(true ? 'Truthy' : 'Falsy'); // if ternário condição ? se verdade : se falso
    console.log(1 ? 'Truthy' : 'Falsy'); // diferente de 0
   // console.log(' ' ? 'Truthy' : 'Falsy'); sempre truthy, com espaço entre
    //console.log([] ? 'Truthy' : 'Falsy'); arrays sempre tru
    //console.log({} ? 'Truthy' : 'Falsy'); objects sempre tru

    const movies = ['Duna', 'Interestrelar','Matrix']
    // aqui no find, só podemos entrar com valores string e no array pode ser string ou undefined
    const movie = movies.find(item => item.includes('Matrix')) //aqui fizemos manualmente
    
    // type guard para movie
    if (movie){ // aqui verificamos se movie é string, e assim, sendo truthy
        console.log(movie);
    } else{ // se for falsy
        console.warn('Filme não encontrado');
    }
    
    
}