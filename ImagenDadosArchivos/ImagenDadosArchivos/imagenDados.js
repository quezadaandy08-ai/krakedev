let puntos;
 puntos=0;
 let lanzamientos;
 lanzamientos=5;


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
    if(puntos > 20){
        mostrarMensaje("Ganaste","ganaste");
        limpiar();
    }
 
}

modificarPuntos=function(numero){
  puntos=puntos+numero;
  cambiarTexto("lblPuntos",puntos);
  //obtener mas de 20 mostar mensaje ganaste
  //invocar a limpiar
}
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos", lanzamientos);
   //el puntaje llega a cero mostrar game over
   if(lanzamientos == 0){
            if(puntos <= 20){
            mostrarMensaje("Game Over","perdiste");
            limpiar()
            }
            }
}
limpiar=function(){
    puntos=0;
    lanzamientos=5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarImagen("imgDado", "");

}
mostrarMensaje=function(texto, clase){
    let mensaje = document.getElementById("lblMensaje");
    mensaje.innerText = texto;
    mensaje.className = "win" + clase;
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