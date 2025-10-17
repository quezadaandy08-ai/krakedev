let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
   mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);
    if(puntos > 20){
        mostrarMensaje("GANASTE!!!","ganaste");
        limpiar();
    }
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
}

modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos == 0){
            if(puntos <= 20){
            mostrarMensaje("GAME OVER","perdiste");
            limpiar()
        }
    }
}

limpiar=function(){
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarImagen("imgDado","")
}

mostrarMensaje=function(texto, clase){
    let mensaje = document.getElementById("lblMensaje");
    mensaje.innerText = texto;
    mensaje.className = "win " + clase;
}

//Función mostrarCara, recibe el numero que quiere mostrar
//Muestra la imagen correspondiente al numero que recibe
//No retorna nada
mostrarCara=function(numero){
    if(numero == 1){ //Con == se compara, mientras que con = se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
         cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
         cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
         cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
         cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
         cambiarImagen("imgDado","dados6.png");
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