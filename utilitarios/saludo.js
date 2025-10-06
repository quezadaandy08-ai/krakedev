saludar=function(){
    let Nombre=recuperarTexto("txtNombre");
    let Apellido=recuperarTexto("txtApellido");
}

recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}