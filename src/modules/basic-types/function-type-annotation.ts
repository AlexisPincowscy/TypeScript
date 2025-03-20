// Funções Type Annotation
// Tipando a função

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
// Para tiparmos a função, em uma variável seguimos o padrão:
let calculateTotal: (sC:ShoppingCart) => number // aqui indicamos a variável que ela receberá uma função com esses parâmetros e retunr tipo number

calculateTotal = function (shoppingCart:ShoppingCart): number{ //agora indicamos que a variável vai receber a função como valor, obedencendo os tipos setados antes
    const total = shoppingCart.cartIems.reduce((acc,item)=>acc+item.price,0)
    return total   
}

const total = calculateTotal(shoppingCart)
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);


type AddressOrUndefined = (cst: Customer) => Address | undefined

const getPrincipalAddress: AddressOrUndefined = (customer:Customer): Address | undefined => {  // pode ser arrow function
    return customer.addresses.find(addresses => addresses.default)
}

const principalAddress = getPrincipalAddress(customer)
console.log(principalAddress?.cep);



export {calculateTotal, getPrincipalAddress}