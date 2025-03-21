export const bootstrap = (): void => {

    // uma espécie de listas com valores pré-determinados, bom para situações com número de possibildades possíveis
    // bom para não se perder nas passagens de valores, são sempre conhecidas
    
    enum OrderStatus { // ele define valores em cada nmumero da lista
        PENDING,
        DELIVERED = 1234, // se ele tiver valor definido, consigo pegar ele de novo pelo atributo
        CANCELED
    }

    enum TipoPedido {
        LOJA = 'iFOOD',//se usarmos string em algum atributo, o TS não consegue auto completar o resto
        VALOR = 12.90 // precisamos assim, defeinir o valor específico
    }


    enum OrderStatus { // quando repetimos o mesmo enum e escrevemos outros atributos, ele adiciona ao original
        WAITINGPAYMENT = "Esperando pagamento",
        SENT = 'Saiu para entrega'
    }

    function changeOrderStatus(newStatus: OrderStatus):void { // o enum pode ser passado como type de parâmetro
        if (newStatus === OrderStatus.SENT){
            console.log("Confirmando: ", newStatus);
        }    
    }

    changeOrderStatus(OrderStatus.SENT)


    console.log("\n");
    
    console.log(OrderStatus); // a lista de relaçao
    console.log(OrderStatus.DELIVERED); // o atributo
    console.log(OrderStatus[1])// aqui o valor do número 1, agora dando undefined, pois ele tem valor específico
    console.log(OrderStatus[1234]) // retorna o atributo

    console.log(TipoPedido.LOJA);
    console.log(TipoPedido); // com string ele não faz o cruzamento de atributos quando imprimimos o enum
}