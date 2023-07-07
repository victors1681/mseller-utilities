const fs = require("fs")

const data = require("./data.json")

let LAST_SEC = 30473

const orders = data.Pedidos.map(order => {
    LAST_SEC++
    order.NoPedido = LAST_SEC
    order.NoPedidoStr = `${LAST_SEC}-${order.Vendedor}`
    //Actualizar detalle
    const detalle = order.Detalle.map((d) => {
        d.NoPedido = LAST_SEC,
        d.NoPedidoStr = `${LAST_SEC}-${order.Vendedor}`
        return d
    })
    order.Detalle = detalle
    return order
});

const result = {
        Pedidos: orders
}

fs.writeFile("./correccion.json", JSON.stringify(result), (err)=>{
    if(err){
        console.log("Error")
    }else{
        console.log("Proceso terminado: correccion.json")
    }
})