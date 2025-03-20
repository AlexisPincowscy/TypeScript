// Funcções do tipo RETURN 


type CartItem = {
    id: number,
    price: number
}

type Address = {
    cep: string,
    default: boolean
}


type ShoppingCart = {
    cartIems: CartItem[]
}

type Customer = {
    addresses: Address[]
}


const shoppingCart: ShoppingCart = {
    cartIems: [
        {id: 70100, price: 500},
        {id: 60400, price: 700},
        {id: 50300, price: 900}
    ]
}

const addresses: Address [] = [
    {cep: "1234-5673", default: false},
    {cep: "1234-5672", default: false},
    {cep: "1234-5671", default: true}
]


const customer: Customer ={
    addresses: addresses
}

console.log("Detalhes do cliente: ", customer);


export function calculateTotal(shoppingCart:ShoppingCart): number{
    const total = shoppingCart.cartIems.reduce((acc,item)=>acc+item.price,0)
    return total   
}

const total = calculateTotal(shoppingCart)
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);


export function getPrincipalAddress (customer:Customer): Address | undefined{
    return customer.addresses.find(addresses => addresses.default)
}

const principalAddress = getPrincipalAddress(customer)
console.log(principalAddress?.cep);
