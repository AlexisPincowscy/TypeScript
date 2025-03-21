// Type Alias são "apelidos" que podemos dar para um tipo de variável
// A escrita é PascalCase (primeira maiúscula)
// Essa notação aparece apenas no TS, some quando fazemos a compilação

// Aqui criamos o tipo salary que vai receber um valor numbr ou string
type Salary = number | string 

// aqui um objeto programmer que recebe esses valores
type Programmer = {
    name: string, 
    age: number, 
    skills?: string[],
    contact: {email:string, phone:string},
    salaray?: Salary
}



// aqui chamando a função passando o parâmetro e esse parâmetro é do tipo Programmer
export function showProgrammer(programmer: Programmer){
    console.log(programmer)
}

showProgrammer({
    name: "Alexis",
    age: 36,
    skills: ["React", "Ts"],
    contact: {email: 'alx@teste.com', phone: '9989-8998'}
    // aqui podemos ou não ter o salary, já quie ele é opcional
})