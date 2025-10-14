jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostarCara(resultado);
   
}
mostarCara=function(numero){
    if(numero==1){
        cambiarImagen("imagenDados","dados1.png");
    }else if(numero==2){
        cambiarImagen("imagenDados","dados2.png");
    }else if(numero==3){
        cambiarImagen("imagenDados","dados3.png");
    }else if(numero==4){
        cambiarImagen("imagenDados","dados4.png");
    }else if(numero==5){
        cambiarImagen("imagenDados","dados5.png");
    }else if(numero==6){
        cambiarImagen("imagenDados","dados6.png");
    }
}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}