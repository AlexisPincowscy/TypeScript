// Union types - cobinações de tipos
// o símbolo é o |, quando descrito nos tipos
let total; // aqui criamos um variável que aceita ser string, number ou boolean
total = true; // aceitando valor bool
total = 'Carlinhos'; // aceitando ser string
total = 123.90; // aceitando ser number
let shoppingCart = ['193', 200, '14.90', 134, 18, 'not defined'];
export function totalize(values) {
    return values
        .map(value => typeof value === 'number' ? value : parseFloat(value)) //alterando todas as strings para numbers
        .filter(value => !isNaN(value)) // filtra para ver se os valores são válidos (não são números)
        .reduce((accumulate, current) => accumulate + current, 0); // totalizar
}
console.log(totalize(shoppingCart));
