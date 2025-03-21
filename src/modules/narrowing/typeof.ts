export const bootstrap = (): void =>{
    const x = 'teste';
    console.log('string: ', typeof x);//tipo string
    console.log('number: ', typeof 123);//tipo number
    console.log('BigInt: ', typeof 123n);//tipo bigint
    console.log('symbol: ', typeof Symbol('teste'));//tipo symbol
    console.log('undefined: ', typeof undefined);//tipo unefined
    console.log('object: ', typeof {});//tipo object
    console.log('array(object): ', typeof []);//tipo object
    console.log('null(object): ', typeof null);//tipo object por bug histórico
}