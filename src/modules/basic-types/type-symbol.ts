export const bootstrap = ():void => {

    // Symbol represetna uma valor único e imutável
    // Serve para evitar conflitos entre nomes de atributos/objetos/propriedades

    const title: symbol = Symbol('HOME')
    const subtitle: symbol = Symbol('HOME')

    // a ideia do symbol é alocar separadamente na memória, então mesmo que os valores sejam iguais, elas não são iguais
    if (title === subtitle){ // eles, por padrão retornam false, mesmo tendo o mesmo valor
        console.log("Sim, são iguais");
    }

    const titleSymbol:symbol = Symbol('title') //criamos uma var tipo Sybom com valor title
    const Page = {
        title: 'HOME',
        [titleSymbol]: 'Página Principal' // usamos essa va aqui no objeto como atributo, mesmo o nome geral dela sendo 'title', funciona aqui
    }

    console.log(Page.title);
    console.log(Page[titleSymbol]);
    console.log(Page);
    
    
}