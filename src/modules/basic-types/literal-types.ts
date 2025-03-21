// Tipagem literal

// aqui tipagem normal, tipo string e valor info
let logType: string = 'info'
logType = 'warn' 
// ele aceita as mudanças

// mas podemos fazer um tipo literal
let logType2: 'info'//repare que não é = e sim :, então estou tipando ela com esse valor
// logType2 = 'warn' // ela não aceita outro vlaor, a não ser info

type LogTypeFunction =  'info'|'warn'|'error' //aqui usando type alias
export function logger(type: LogTypeFunction, message: string){ // aqui podemos pré definir nos parâmetros os tipos a serem recebidos
    switch(type){
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

logger('error','404 not found!')//quando vamos chamar a função ela já deixa restrito as possibilidades, não aceitando um valor diferente