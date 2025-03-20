// O type any não deve ser usado, já que ele tira o propósito do TS
// Podemos definir um valor com any, mas o TS vai aceitar qualquer coisa, o que pode
// gerar erros mais à frente, sendo que a função do TS é tipar o JS
export function handleFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.zise}`); //aqui erramos o atributo do objeto
}
const file = {
    name: 'exemplo_de_any',
    size: 12345
};
handleFileUpload(file); // ele vai imprimir e dar um tamanho:undefined, aceitando o erro
