export const bootstrap = () => {
    //null = valor em branco, null é um valor!!
    console.log("Null");
    let title = null;
    console.log("Title:", title);
    console.log('Title (if)', title ? 'verdadeiro' : 'falso'); //false por padrão
    console.log('Tipo null:', typeof (title)); //bug histórico, retorna object
    //undefined = sem valor, variável vazia
    console.log("\nUndefined");
    let subtitle = undefined;
    console.log("Subtitle:", subtitle);
    console.log('Subtitle (if)', subtitle ? 'verdadeiro' : 'falso'); //falso por padrão
    console.log('Tipo null:', typeof (subtitle));
    let books = {
        title: "Curso de TS"
    };
    console.log("Número de pags: ", books.numberPage);
    console.log("Ordem das pags: ", books.orderPage); //aqui acessamos o valor, o () é o executar a função
    // console.log("Ordem das pags: ", books.orderPage()) - aqui teríamos executado, nesse caso ele não deixa pq não pode
    // executar função que po resultado será undefined
};
