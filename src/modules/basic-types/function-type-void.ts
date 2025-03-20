// Funcções do tipo VOID são funcções que não terão um return no final
// Elas executem algo, mas sem ter um return explícito.
// Colocar um return pode gerar incosistências.

// TODO CartItem
type CartItem = {
    id: number,
    price: number
}

// TODO ShoppingCart
type ShoppingCart = {
    cartIems: CartItem[]
}

// TODO criar vriável do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
    cartIems: [
        {id: 70100, price: 500},
        {id: 60400, price: 700},
        {id: 50300, price: 900}
    ]
}
// TODO função do tipo void para somar os valores dos itens
export function calculateTotal(shoppingCart:ShoppingCart): void{ // é boa prática em funções do tipo void, delimitar ela, evitando returns errados
    const total = shoppingCart.cartIems.reduce((acc,item)=>acc+item.price,0)
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
    
}

calculateTotal(shoppingCart)