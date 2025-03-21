// Funcções do tipo RETURN 
// Elas tem um valor de retorno definido, no TS é importante escrevermos qual o tipo será devolvido
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
console.log("Detalhes do cliente: ", customer);
export function calculateTotal(shoppingCart) {
    const total = shoppingCart.cartIems.reduce((acc, item) => acc + item.price, 0);
    return total;
}
const total = calculateTotal(shoppingCart);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
export function getPrincipalAddress(customer) {
    return customer.addresses.find(addresses => addresses.default);
}
const principalAddress = getPrincipalAddress(customer);
console.log(principalAddress?.cep);
