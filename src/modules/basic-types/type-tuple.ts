// Tuples ou Tuplas - são arrays com tipos específicos
// aqui faz diferença a posição do tipo de item do array, mais específico

// arrays padrão
let exeArray: (string | boolean | number)[] = [1, 'Guerra Civil', false] // tudo certo aqui, ele aceita aquelas variações de valores, independtenda ordem

// exemplo de tupla
let exeTuple: [number,string,boolean] = [2, 'Cidade de Deus', true]//aqui precisa estar na ordem certa do parâmetro, senão da erro
// let exeTupleError: [number, string, boolean] = [false, 34, 'Carro'] // repare que aqui ele exibe erro de posicionamento

// podemos dar opções de valores dentro de cada posição
let exeTupleOption: [number,string,boolean?] = [2, 'Cidade de Deus']//aqui o ? deixa o valor ser o tipo ou não ter nada, caso exista a opção de não ser prenchido

const [id, filmName, rented] = exeTuple //aqui ele sabe exatemente qual tipo de valor será recebido na posição
console.log(exeTuple)