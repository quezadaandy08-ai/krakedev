calcularPromedioNotas=function(){
    let num1;
    num1=recuperarFlotante("txtNum1");
    let num2;
    num2=recuperarFlotante("txtNum2");
    let num3;
    num3=recuperarFlotante("txtNum3");
    let promedio;
    promedio=calcularPromedio(num1,num2,num3);
    let valor2Decimales;
    valor2Decimales=promedio.toFixed(2);
    cambiarTexto("lblResultado" ,valor2Decimales);
    if(valor2Decimales<5 && valor2Decimales>0){  
    cambiarTexto("lbltexto","REPROBADO");
    }else if(valor2Decimales>=5 && valor2Decimales<=8){   
    cambiarTexto("lbltexto","BUEN TRABAJO");
    }else if(valor2Decimales>8 && valor2Decimales<=10){   
    cambiarTexto("lbltexto","EXCELENTE");
    }else if(valor2decimales<0 && valor2Decimales>10){
    cambiarTexto("lbltexto","DATOS INCORRECTOS");
    }

}