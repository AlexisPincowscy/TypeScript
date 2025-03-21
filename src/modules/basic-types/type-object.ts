let programmer = {// pode ser escrito assim tb programmer: {name: string, age: number}, assim ele já seria tipado
    name: 'Alexis',
    age: 36,
    skills: ['TypeScript', 'React']
}

// vamos definir a função para imprimir o rsultado
// vemos que TS ela pode ser passada já sendo tipada, podendo chamar um já existente ou criando um novo
export function showProgrammer(programmer: {
    name: string, age: number, skills?: string[]}){// colocando om ? fazemso com que esse aributo seja opicional, o primeiro exemplo vai ter, o segundo não
    console.log(programmer)
}//definindo os parâmetros de objeto tipados

showProgrammer(programmer)
showProgrammer({name:'Lígia',age:32})