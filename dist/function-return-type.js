"use strict";
// Funcções do tipo RETURN 
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
exports.getPrincipalAddress = getPrincipalAddress;
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
function calculateTotal(shoppingCart) {
    const total = shoppingCart.cartIems.reduce((acc, item) => acc + item.price, 0);
    return total;
}
const total = calculateTotal(shoppingCart);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
function getPrincipalAddress(customer) {
    return customer.addresses.find(addresses => addresses.default);
}
const principalAddress = getPrincipalAddress(customer);
console.log(principalAddress?.cep);
