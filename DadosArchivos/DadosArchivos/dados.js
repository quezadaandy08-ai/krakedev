jugar=function(){
    let valorAletorio;
    valorAletorio=jugarDados();
    cambiarTexto("lblNumero",valorAletorio);
    if(valorAletorio>3){
        console.log("ES MAYOR A 3");
        console.log("GANASTE");
    }else{
        console.log("ES MENOR A 3");
        console.log("PERDISTE");
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