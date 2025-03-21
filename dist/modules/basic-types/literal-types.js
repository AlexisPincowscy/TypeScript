// Tipagem literal
// aqui tipagem normal, tipo string e valor info
let logType = 'info';
logType = 'warn';
// ele aceita as mudanças
// mas podemos fazer um tipo literal
let logType2; //repare que não é = e sim :, então estou tipando ela com esse valor
export function logger(type, message) {
    switch (type) {
        case 'info':
            console.log(`Info: ${message}`);
            break;
        case 'warn':
            console.log(`Warn: ${message}`);
            break;
        case 'error':
            console.log(`Error: ${message}`);
            break;
    }
}
logger('error', '404 not found!'); //quando vamos chamar a função ela já deixa restrito as possibilidades, não aceitando um valor diferente
