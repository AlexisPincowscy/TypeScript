// Funções Type Annotation Callbacks
// A função pode ser enviada por parÂmetro.
// Em outras palavras, pássar uma função dentro da outra

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
        {id: 60400, price: 200},
        {id: 50300, price: 300}
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
// criando a funçãod e callback
type ApplyDescountFn = (total: number, discount: number) => number

const applyDescountFn: ApplyDescountFn = (total: number, discount: number) => {
    return total - total * discount
}

type CalculateTotalFn = (sC:ShoppingCart, callback:ApplyDescountFn) => number  // criamos o segundo parâmetro, sendo uma função de callback
// Para tiparmos a função, em uma variável seguimos o padrão:
let calculateTotal: CalculateTotalFn =  function (shoppingCart:ShoppingCart, applyDiscount:ApplyDescountFn): number{
    const total = shoppingCart.cartIems.reduce((acc,item)=>acc+item.price,0);
    return applyDescountFn(total, 0.10)   
}

const total = calculateTotal(shoppingCart, applyDescountFn) // aqui cahamdno as duas
console.log(`Total do carrinho, com desconto de 10%: R$ ${total.toFixed(2)}`);


type AddressOrUndefined = (cst: Customer) => Address | undefined

const getPrincipalAddress: AddressOrUndefined = (customer:Customer): Address | undefined => {  // pode ser arrow function
    return customer.addresses.find(addresses => addresses.default)
}

const principalAddress = getPrincipalAddress(customer)
console.log(principalAddress?.cep);



export {calculateTotal, getPrincipalAddress}