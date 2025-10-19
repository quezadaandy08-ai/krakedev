calcularTazaInteres=function(ingresoAnual){
    let tasaInteres;
    if (ingresoAnual < 300000) {
    tasaInteres=0.16; // 16%
  } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    tasaInteres=0.15; // 15%
  } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    tasaInteres=0.14; // 14%
  } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    tasaInteres=0.13; // 13%
  } else if(ingresoAnual >=2000000){
    tasaInteres=0.12; // 12%
  }
  return tasaInteres;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
     let capacidadPago;
     if(edad>50){
        capacidadPago=(ingresos-egresos)*0.30;
     }else if (edad<=50){
        capacidadPago=(ingresos-egresos)*0.40;
     }
     return capacidadPago;
}
calcularDescuento=function(precio,cantidad){
    let valorPagar;
    if(cantidad<3){
        valorPagar=precio;
    }else if(cantidad>3 && cantidad==5){
        valorPagar=precio*(2/100);
    }else if(cantidad>=6 && cantidad==11){
        valorPagar=precio*(3/100);
    }else if(cantidad>12){
        valorPagar=precio*(4/100);
    }
    return valorPagar;
}
determinarColesterolLDL=function(nivelColesterol){
    let nivelColes;
    if(nivelColesterol>100){
        nivelColes="BUENO";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){;
        nivelColes="CASI BUENO";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        nivelColes="CASI ALTO";
    }else if(nivelColesterol>=160){
        nivelColes="ALTISIMO";
    }
    return nivelColes;
}
validarClave=function(clave){
    let claveValidada;
    claveValidada=clave.lenght;
    if(claveValidada>=8 && claveValidada<=16){
        return true;
    }else{
        return false;
    }
}
esMayuscula = function(caracter){
    let prueba;
    prueba = caracter.charCodeAt(0);
    if(prueba >=65 && prueba <= 90){
        return true;
    }else{
        return false;
    }
}
esMinuscula = function(caracter){
    let prueba;
    prueba = caracter.charCodeAt(0);
    if(prueba >= 97 && prueba <= 122 || prueba == 130 || prueba >= 160 && prueba <= 163){
        return true;
    }else{
        return false;
    }
}
esDigito = function(caracter){
    let prueba;
    prueba = caracter.charCodeAt(0);
    if(prueba >= 48 && prueba <= 57){
        return true;
    }else{
        return false;
    }
}
darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        return true;
    }else{
        return false;
    }
}
otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica > 90 || notaFisica > 90 && notaGeometria > 80){
        return true;
    }else{
        return false;
    }
}
dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90 && notaFisica > notaMatematica){
        return true;
    }else{
        return false;
    }
}