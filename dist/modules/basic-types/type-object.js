let programmer = {
    name: 'Alexis',
    age: 36,
    skills: ['TypeScript', 'React']
};
// vamos definir a função para imprimir o rsultado
// vemos que TS ela pode ser passada já sendo tipada, podendo chamar um já existente ou criando um novo
export function showProgrammer(programmer) {
    console.log(programmer);
} //definindo os parâmetros de objeto tipados
showProgrammer(programmer);
showProgrammer({ name: 'Lígia', age: 32 });
