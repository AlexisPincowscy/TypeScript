// Funções Type Annotation
// Tipando a função
const shoppingCart = {
    cartIems: [
        { id: 70100, price: 500 },
        { id: 60400, price: 700 },
        { id: 50300, price: 900 }
    ]
};
const addresses = [
    { cep: "1234-5673", default: false },
    { cep: "1234-5672", default: false },
    { cep: "1234-5671", default: true }
];
const customer = {
    addresses: addresses
};
// Para tiparmos a função, em uma variável seguimos o padrão:
let calculateTotal; // aqui indicamos a variável que ela receberá uma função com esses parâmetros e retunr tipo number
calculateTotal = function (shoppingCart) {
    const total = shoppingCart.cartIems.reduce((acc, item) => acc + item.price, 0);
    return total;
};
const total = calculateTotal(shoppingCart);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
const getPrincipalAddress = (customer) => {
    return customer.addresses.find(addresses => addresses.default);
};
const principalAddress = getPrincipalAddress(customer);
console.log(principalAddress?.cep);
export { calculateTotal, getPrincipalAddress };
