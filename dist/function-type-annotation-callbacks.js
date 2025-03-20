"use strict";
// Funções Type Annotation Callbacks
// A função pode ser enviada por parÂmetro.
// Em outras palavras, pássar uma função dentro da outra
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrincipalAddress = exports.calculateTotal = void 0;
const shoppingCart = {
    cartIems: [
        { id: 70100, price: 500 },
        { id: 60400, price: 200 },
        { id: 50300, price: 300 }
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
const applyDescountFn = (total, discount) => {
    return total - total * discount;
};
// Para tiparmos a função, em uma variável seguimos o padrão:
let calculateTotal = function (shoppingCart, applyDiscount) {
    const total = shoppingCart.cartIems.reduce((acc, item) => acc + item.price, 0);
    return applyDescountFn(total, 0.10);
};
exports.calculateTotal = calculateTotal;
const total = calculateTotal(shoppingCart, applyDescountFn); // aqui cahamdno as duas
console.log(`Total do carrinho, com desconto de 10%: R$ ${total.toFixed(2)}`);
const getPrincipalAddress = (customer) => {
    return customer.addresses.find(addresses => addresses.default);
};
exports.getPrincipalAddress = getPrincipalAddress;
const principalAddress = getPrincipalAddress(customer);
console.log(principalAddress?.cep);
