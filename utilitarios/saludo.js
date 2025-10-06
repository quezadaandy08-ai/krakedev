saludar=function(){
    let Nombre=recuperarTexto("txtNombre");
    let Apellido=recuperarTexto("txtApellido");
    let Edad=recuperarInt("txtEdad");
    let Estatura=("txtEstatura");
    let mensajeBienvenida="Bienvenido "+Nombre+" "+Apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
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