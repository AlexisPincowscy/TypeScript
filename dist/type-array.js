"use strict";
// o TS consegue definir arrays homogênoes
// let films: string[] = ['Duna', 'Divertidamente 2'] ele não aceita algo diferente de string
// let numbers: number[] = [10,20,14,] aqui só números
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCaseString = toUpperCaseString;
let films = ['Duna', 'Divertidamente 2']; //outra maneira de definir o tipo do array
let numbers = [10, 20, 14,];
function toUpperCaseString(arr) {
    return arr.map(value => value.toLocaleUpperCase()); //ele auxilia corretamente pq sabe que vai recerber um array de string e abre apenas o métodos possíveis para isso
}
console.log(toUpperCaseString(films));
