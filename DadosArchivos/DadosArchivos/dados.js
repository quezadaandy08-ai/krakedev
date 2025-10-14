jugar=function(){
    let valorAletorio;
    valorAletorio=jugarDados();
    cambiarTexto("lblNumero",valorAletorio);
    if(valorAletorio>3){
        cambiarTexto("lblMensaje","GANASTE")
    }else{
        cambiarTexto("lblMensaje","PERDISTE")
    }
    }

    jugarDados=function(){
    let aletorio;
    let numeroRandom;
    let numeroRandomEntero;
    let valorDado;
    aletorio=Math.random();
    numeroRandom=aletorio*6;
    numeroRandomEntero=parseInt(numeroRandom);
    valorDado=numeroRandomEntero+1;
    return valorDado;
    }