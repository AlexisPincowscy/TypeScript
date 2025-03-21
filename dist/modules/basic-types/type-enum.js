export const bootstrap = () => {
    // uma espécie de listas com valores pré-determinados, bom para situações com número de possibildades possíveis
    // bom para não se perder nas passagens de valores, são sempre conhecidas
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
        OrderStatus[OrderStatus["DELIVERED"] = 1234] = "DELIVERED";
        OrderStatus[OrderStatus["CANCELED"] = 1235] = "CANCELED";
    })(OrderStatus || (OrderStatus = {}));
    let TipoPedido;
    (function (TipoPedido) {
        TipoPedido["LOJA"] = "iFOOD";
        TipoPedido[TipoPedido["VALOR"] = 12.9] = "VALOR"; // precisamos assim, defeinir o valor específico
    })(TipoPedido || (TipoPedido = {}));
    (function (OrderStatus) {
        OrderStatus["WAITINGPAYMENT"] = "Esperando pagamento";
        OrderStatus["SENT"] = "Saiu para entrega";
    })(OrderStatus || (OrderStatus = {}));
    function changeOrderStatus(newStatus) {
        if (newStatus === OrderStatus.SENT) {
            console.log("Confirmando: ", newStatus);
        }
    }
    changeOrderStatus(OrderStatus.SENT);
    console.log("\n");
    console.log(OrderStatus); // a lista de relaçao
    console.log(OrderStatus.DELIVERED); // o atributo
    console.log(OrderStatus[1]); // aqui o valor do número 1, agora dando undefined, pois ele tem valor específico
    console.log(OrderStatus[1234]); // retorna o atributo
    console.log(TipoPedido.LOJA);
    console.log(TipoPedido); // com string ele não faz o cruzamento de atributos quando imprimimos o enum
};
