let product = 'Mirco-ondas'; // exemplo didático, pq o type inference, consegue saber que é string
let price = 12.34; // ele já sabe que é number, float nesse caso
product.length; //aqui temos funções já definidas por ser string
price.toFixed(0); //para delimitar o número de casas decimais
// utilizamos o type annotation, para parâmetro de função, evitando erros
// além de definir o stipo, ele reconhece a entrada, liberando os métodos possíveis
export function display(product, price) {
    console.log(product.toUpperCase(), price.toFixed(2));
}
display(product, price);
