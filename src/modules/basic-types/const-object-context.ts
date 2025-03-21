// No contexto de orientação à objetos, estamos falando de refêrencia à memória
// diferente de arrays e tuplas, quando colocamos o readonly, não podemos mudar nenhuma posição
// com objetos oq eu não podemos mudar é a estrutura, mas podemos alterar os valores dos atributos
// a não ser que o determinado atributo seja especificado readonly

type Arquivo = {
    name: string,
    readonly size: number; //nesse caso, não conseguimos alerar o valor
}

const file: Arquivo ={ //por ser const não podemos acrescentar um outro atributo
    name: 'lista_funcionários.txt',
    size: 12345
}

// mas podemos alterar o valor de dentro

export function extractFile (file:Arquivo){
    file.name = 'alteração.txt'
    // file.size = 12434 aqui ele já mostra erro pq size é readonly
    console.log(file);
}

extractFile(file)