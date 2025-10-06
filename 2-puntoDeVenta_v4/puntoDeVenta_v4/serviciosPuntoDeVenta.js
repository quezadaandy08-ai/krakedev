calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento;
    descuento=(monto*porcentajeDescuento)/100;
    return descuento;
}
calcularIVA=function(monto){
 let IVA;
 IVA=(monto*12)/100;
 return IVA;
}
calcularSubtotal=function(precio, cantidad){
    return precio * cantidad
}

calcularTotal=function(subtotal, descuento, IVA){
    return subtotal - descuento + IVA
}