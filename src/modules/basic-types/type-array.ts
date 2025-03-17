// o TS consegue definir arrays homogênoes
// let films: string[] = ['Duna', 'Divertidamente 2'] ele não aceita algo diferente de string
// let numbers: number[] = [10,20,14,] aqui só números

let films: Array<string> = ['Duna', 'Divertidamente 2']; //outra maneira de definir o tipo do array
let numbers: number[] = [10,20,14,]

export function toUpperCaseString (arr:Array<string> ){//poderia ser do outro jeito string[]
    return arr.map(value => value.toLocaleUpperCase())//ele auxilia corretamente pq sabe que vai recerber um array de string e abre apenas o métodos possíveis para isso
}

console.log(toUpperCaseString(films));