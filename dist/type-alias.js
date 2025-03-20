// Type Alias são "apelidos" que podemos dar para um tipo de variável
// A escrita é PascalCase (primeira maiúscula)
// Essa notação aparece apenas no TS, some quando fazemos a compilação
// aqui chamando a função passando o parâmetro e esse parâmetro é do tipo Programmer
export function showProgrammer(programmer) {
    console.log(programmer);
}
showProgrammer({
    name: "Alexis",
    age: 36,
    skills: ["React", "Ts"],
    contact: { email: 'alx@teste.com', phone: '9989-8998' }
    // aqui podemos ou não ter o salary, já quie ele é opcional
});
