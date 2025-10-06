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
calcularSubtotal=function(precio,cantidad){
    let subtotal;
    subtotal=precio*cantidad;
    return subtotal;
}

calcularTotal=function(subtotal,descuento,IVA){
    let Total;
    Total=(subtotal+IVA)-descuento;
    return Total;
}