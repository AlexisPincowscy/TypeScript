// Modificador ReadOnly para apenas receber os dados, sem poder mexer no aray/tupla

let number: number[] = [10,20,30,40,50] //aqui aceita alteração de valor
let numbers2: readonly number[] = [10,20,30,40,50]//aqui ceita funções, mas não posso alterar valor
// let number3: ReadonlyArray<number> = [10,20,30,40,50] outra opçãod e escrita do readonly


number[0] = 15 // vai ter alterado o primerio valor
console.log(number) 

let numbersCopy = numbers2.map((value)=>value*2)//uma nova varável recebendo o valor do array x2 em cada posição
// o .map retorna um novo array, por isso funciona, pois ele não muda os valores originais sobre o  original
console.log(numbersCopy)
console.log(numbers2.map(item=>item*2))

let exeTuple: readonly [number, number, number] = [1,2,3] //tupla usando o radonly


export default () => {} //manter o padrão de sempre exporta para ser um module
