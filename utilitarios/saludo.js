saludar=function(){
    let Nombre=recuperarTexto("txtNombre");
    let Apellido=recuperarTexto("txtApellido");
    let Edad=recuperarInt("txtEdad");
    let Estatura=("txtEstatura");
    let mensajeBienvenida="Bienvenido "+Nombre+" "+Apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    cambiarImagen("imgSaludo","./imagenes/asd.gif");
    mostrarTextoEnCaja("txtNombre"," ");
}

