
    //ESTRUCTURAS DE CONTROL: TENEMOS DOS TIPOS CONOPARADORES Y CONDICIONALES

    // TIPO COMPARADORES

    // EMPEZAREMOS CON EL IF() ES DECIR, SI SE CUMPLE ()
    
    const numeroJM = 900; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE
    
    if (numeroJM === 1000) { // DOS/TRES IGUALES ES UNA COMPARACIÓN
        console.log("numeroJM es 1000")
    }
    else {    // SI NO SE CUMPLE EL IF, EJECUTA EL ELSE
        console.log("numeroJM NO es 1000")
    }

    // EJERCICIO

    let saldoJM=200;
    let pinJM=1234;
    let importeRetirar=100;
    let pinIntroducido=1234;

    if(pinIntroducido===pinJM){
        console.log("PIN OK");
        if(importeRetirar<=saldoJM){
            console.log("Saldo Suficiente")
        }else{
            console.log("Saldo Insuficiente")
        }

    }else{
        console.log("PIN INCORRECTO")
    }

    // EJERCICIO COMPLETO DEL CAJERO

    function cajero (pin,cantidad){
        if(pin===pinJM){
            console.log("PIN OK");
            if(cantidad<=saldoJM){
                console.log("Saldo Suficiente")
            }else{
                console.log("Saldo Insuficiente")
            }
    
        }else{
            console.log("PIN INCORRECTO")
        }
    }

    cajero(1234,200);


    //USO DE ELSE IF, PARA HACER MÚLTIPLES COMPARACIONES
    
    let rol = "Editor";

    if(rol==="Administrador"){
        console.log("Eres Administrador")
    }else if(rol==="Editor"){
        console.log("Eres editor")
    }else if(rol==="Gestor"){
        console.log("Eres Gestor")
    }else{
        console.log("No eres Nadie")
    }

    // EJERCICIO 1

    // CREAR UNA ESTRUCTURA DE CONTROL QUE COMPARE EN QUE ESTACIÓN DEL AÑO ESTAMOS
    // Y ME DIGA CUAL ES LA SIGUIENTE. PRIMAVERA-VERANO-OTOÑO-INVIERNO

    let estacion = "Otoño";

    if(estacion==="Otoño"){
        console.log("ES OTOÑO Y LUEGO ES INVIERNO")
    }else if(estacion==="Invierno"){
        console.log("ES INVIERNO Y LUEGO PRIMAVERA")
    }else if(estacion==="Primavera"){
        console.log("ES PRIMAVERA Y LUEGO VERANO")
    }else if(estacion==="Verano"){
        console.log("ES VERANO Y LUEGO OTOÑO")
    }else{
        console.log("LO QUE HAS INTRODUCIDO NO ES UNA ESTACION")
    }

    // EJERCICIO 2

    /*CREAR UNA ESTRUCTURA DE CONTROL QUE ME DIGA SI LA NOTA DE UN EXAMEN 
    ES SOBRESALIENTE 9-10
    NOTABLE 7-8
    SUFICIENTE 5-6
    SUSPENSO -5
    CREAMOS UNA VARIABLE NUEVA QUE SE LLAME NOTA EXAMEN

    && SIGNIFICA Y
    || SIGNIFICA O

    */


    let notaExamen = 7.5;

    if(notaExamen>=9){
        console.log("ERES SOBRESALIENTE")
    }else if(notaExamen>=7||notaExamen<=8){
        console.log("ERES NOTABLE")
    }else if(notaExamen>=5||notaExamen<=6){
        console.log("ERES SUFICIENTE")
    }else if(notaExamen<=5){
    console.log("ESTAS SUSPENDIDO")
    }

    //TIPO CONDICIONALES

    // USO DE SWITCH, PARA HACER MÚLTIPLIES COMPARACIONES
    // Y OPTIMIZAR EL USO DE TANTO ELSE IF LA DIFERENCIA ES QUE ESTE SE PUEDE USAR PARA VARIOS VALORES PERO EL SWITCH SOLO PARA STRINGS Y NUMEROS ENTEROS


    let metodoPago="Tarjeta";

    switch(metodoPago){
        case "Tarjeta": console.log("El cliente a pagado con Tarjeta");
        break;
        case "Bizum": console.log("El cliente a pagado con Bizum");
        break;
        case "Efectivo": console.log("El cliente a pagado con Efectivo");
        break;
        case "Debito": console.log("El cliente pago con debito");
        default: console.log("Pendiente de pago"); //SI NO SE CUMPLE NADA DE LO ANTERIOR
        break; // TAMBIEN NECESITA UN BREAK EL DEFAULT
    }

    // USO DE PROMPT, ME PIDE POR PANTALLA INFORMACIÓN Y LA VOY ALMACENAR EN LA VARIABLE
    //ES LA VENTANA EMERGENTE 

    // let metodoPago=prompt("Introduce tu metodo de pago","Escriba aqui");



    // EJERCICIO 3

    /*CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI
    UN NÚMERO AL MULTIPLICARLO POR SI MISMO ES MENOR
    QUE 100. SI ES MENOR QUE 200, Y SI NO CUMPLE LAS ANTERIORES*/

    let numeroEj3 = 5;

    if(numeroEj3*numeroEj3<100){
        console.log("EL NUMERO MULTIPLICADO POR SI MISMO ES MENOR QUE 100")
    }else if(numeroEj3*numeroEj3<200){
        console.log("EL NUMERO MULTIPLICADO POR SI MISMO ES MENOR QUE 200")
    }else{
        console.log("NO SE CUMPLE NADA DE LO ANTERIOR")
    }


    function multiplo(x){
        if(x*x<100){
            console.log("EL NUMERO MULTIPLICADO POR SI MISMO ES MENOR QUE 100")
        }else if(x*x<200){
            console.log("EL NUMERO MULTIPLICADO POR SI MISMO ES MENOR QUE 200")
        }else{
        console.log("NO SE CUMPLE NADA DE LO ANTERIOR")
        }
    }


    multiplo(10);


    /*EJERCICIO4
    CREAR UNA ESTRUCTURA DE CONTROL CON SWITCH QUE ME COMPARE SI
    UN NÚMERO + 10 ES:
    =9
    =12
    =15
    =100
    RESTO DE POSIBILIDADES*/

    // let numeroMas10 = parseInt(prompt("Escribe aqui tu numero"))

    let numeroMas10 = -1;

    switch(numeroMas10+10){
        case 9 : console.log("TU NUMERO MAS 10 ES 9")
        break;
        case 12 : console.log("TU NUMERO MAS 10 ES 12")
        break;
        case 15 : console.log("TU NUMERO MAS 10 ES 15")
        break;
        case 100 : console.log("TU NUMERO MAS 10 ES 100")
        break;
        default: console.log("RESTO DE POSIBILIDADES")
    }



