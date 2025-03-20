"use strict";
// Funcções do tipo VOID são funcções que não terão um return no final
// Elas executem algo, mas sem ter um return explícito.
// Colocar um return pode gerar incosistências.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
// TODO criar vriável do tipo ShoppingCart contendo CartItem
const shoppingCart = {
    cartIems: [
        { id: 70100, price: 500 },
        { id: 60400, price: 700 },
        { id: 50300, price: 900 }
    ]
};
// TODO função do tipo void para somar os valores dos itens
function calculateTotal(shoppingCart) {
    const total = shoppingCart.cartIems.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
}
calculateTotal(shoppingCart);
