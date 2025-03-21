export const bootstrap = ():void =>{
    // Permite criar um type a partir de outros types

    type Person = {
        name: string,
        age: number,      
    }

    type Employee = {
        departament: string
    }

    type Customer = {
        whislist: string[]
    }

    type EmployeeDetails = Person & Employee//anotação de type intersection

    const employee: EmployeeDetails = {
        name: 'Alexis',
        age: 36,
        departament: "Web Dev"
    }

    type CustomerDetails = Person & Customer // aqui para clientes

    const customer: CustomerDetails = {
        name: "João",
        age: 30,
        whislist: ['Carro novo', 'PC', 'Headphone']
    }

    // um funcionário que é cliente seria:
    type CustomerAndEmployee = Person & Customer & Employee
    
    const custAndEmploy: CustomerAndEmployee = {
        name:"Lígia",
        age: 32,
        departament: 'Law',
        whislist: ['Carro', 'Casa', 'Cachorro']
    }
}   