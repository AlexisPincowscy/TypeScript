"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
// aqui tipagem normal, tipo string e valor info
let logType = 'info';
logType = 'warn';
// ele aceita as mudanças
// mas podemos fazer um tipo literal
let logType2; //repare que não é = e sim :, então estou tipando ela com esse valor
// logType2 = 'warn' // ela não aceita outro vlaor, a não ser info
function logger(type, message) {
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
logger('error', '404 not found!');
