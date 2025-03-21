// Funcções do tipo RETURN 
// Elas tem um valor de retorno definido, no TS é importante escrevermos qual o tipo será devolvido

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


export function calculateTotal(shoppingCart:ShoppingCart): number{ //aqui dizemos que o resultado é retornado em number
    const total = shoppingCart.cartIems.reduce((acc,item)=>acc+item.price,0)
    return total   
}

const total = calculateTotal(shoppingCart)
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);


export function getPrincipalAddress (customer:Customer): Address | undefined{ // aqui ele retorna em tipo Address ou undefined, repare que usamos um type para definir retorno
    return customer.addresses.find(addresses => addresses.default)
}

const principalAddress = getPrincipalAddress(customer)
console.log(principalAddress?.cep);
