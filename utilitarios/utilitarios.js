mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje; 
}
cambiarImagen=function(idComponente,imagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=imagen;
}
recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}
recuperarInt=function(idComponente){
    let valor=recuperarTexto(idComponente);
    let valorEntero=parseInt(valor);
    return valorEntero;
}
recuperarFloat=function(idComponente){
    let valor=recuperarTexto(idComponente);
    let valorFloat=parseFloat(valor);
    return valorFloat;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}