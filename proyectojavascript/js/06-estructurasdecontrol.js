
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


    let notaExamen = 10;

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


    /*EJERCICIO 4
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

    /*ITERADORES/BUCLES
    FOR
    WHILE
    DO WHILE
    
    
    FOR LOOP (BUCLE FOR) ITERADOR
    VA A ESTAR EJECUTANDO EL CODIGO HASTA QUE SE DEJE DE
    CUMPLIR UNA CONDICIÓN
     
    */
    
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    
    // IRÁ EJECUTANDO EL CÓDIGO SIEMPRE QUE SE CUMPLE LA CONDICION
    
    for (let i = 0; i <= 3; i++) {
        //i === ÍNDICE, SUELE EMPEZAR POR 0, PUES SE USA MUCHO PARA
        //RECORRER ARREGLOS
        //i<=3 SERÁ LA CONDICIÓN. SE EJECUTA MIENTRAS SE CUMPLE
        //i++ ACTUALIZADOR
        console.log(i);
    
    }

    //EJERCICIO MOSTRAR DEL 100 AL 200 DE UNO EN UNO

    for (let i=100; i<=200; i++) {
        console.log(i)
    }

    /*EJERCICIO 5
    MOSTRAR EN ORDEN DESCENDENTE DEL 100 HASTA EL 0, PERO
    DE 5 EN 5
    INCLUIDOS AMBOS*/

    for (let i=100; i>=0; i-=5){
        console.log(i)
    }

    /*EJERCICIO 6
    MOSTRAR DEL 1 AL 20 TODOS LOS NÚMEROS PARES
    INCLUIDOS AMBOS
    NOTA: i%2===0 ME DA LA CONDICIÓN DE PAR*/

    for (let i=1;i<=20;i++){
        if(i%2===0){
            console.log(i)
        }
    }

    /* VAMOS A RECORRER ARRAY DE NUMEROS
    EN QUE POSICION INICIA UN ARRAY??
    MOSTRAR LOS OBJETOS DE UNO EN UNO*/

    let arrayNumeros=[1,2,3,4,5,6,7,8,9];

    for (let i=0;i<arrayNumeros.length;i++){
        console.log(arrayNumeros[i])
    }

    /* EJERCICIO 7 VAMOS A RECORRER ESE CARRITO DE COMPRAS
    EN QUE POSICION INICIA UN ARRAY??
    MOSTRAR LOS OBJETOS DE UNO EN UNO*/


    let carrito = [{nombre:"remera",precio: 2},{nombre:"pantalon",precio: 3},{nombre:"gorra",precio: 4},{nombre:"zapatilla",precio: 10}];

    for (let i=0; i<carrito.length; i++){
        console.log(carrito[i]);
        console.log(carrito[i].nombre);
        console.log(carrito[i].precio);
    }

/*WHILE LOOP. ITERADOR
MUY SIMILAR AL FOR, SINTAXIS UN POCO DIFERENTE
SE EJECUTA MIENTRAS UNA CONDICION SEA EVALUADA COMO
VERDADERA
*/

let i = 0;
// EL INDICE VA FUERA
// LA CONDICION SI VA DENTRO
// EL INCREMENTO VA EN EL CUERPO DE LA FUNCION

while (i < 10) {
    console.log(i);
    i++; // ACTUALIZADOR
}

// SI MODIFICAMOS EL ÍNDICE Y LE DAMOS UN VALOR INICIAL DE 20
// QUE SUCEDE???

// ESA ES JUSTO LA DIFERENCIA CON EL DO WHILE, QUE AL MENOS EJECUTA UNA VEZ
// AL IGUAL QUE PODEMOS UTILIZAR && O || PERO PARA EL FOR NO NOS DEJA

// DO WHILE
/*


*/

let j = 0;

do {
    console.log(j);
    j++;
} while (j < 10);

// EJECUTA EL CODIGO AL MENOS UNA VEZ Y DESPUES EVALUA

// let j =100
// do {
//     console.log(j);
//     j++;
// } while (j < 50);

/*

for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)
*/

/*EJERCICIO 8
MOSTRAR LOS NUMEROS PARES, PERO HACERLO AHORA CON WHILE
MOSTRAR DEL 1 AL 20 TODOS LOS NÚMEROS PARES
INCLUIDOS AMBOS
NOTA: i%2===0 ME DA LA CONDICIÓN DE PAR
*/

let k=1 
while  (k<=20){
    if(k%2===0){
        console.log(k); 
    }
    k++;
}

/*EJERCICIO 9
CREAR UNA FUNCION QUE DADO UN ARGUMENTO ME DIGA SI
* ES POSITIVO
* ES NEGATIVO
* ES =0*/

function confirmacion(x){
    if(x>0){
        console.log("ES POSITIVO");
    }else if(x<0){
        console.log("ES NEGATIVO");
    }else {
        console.log("ES CERO");
    }
}

confirmacion(5);
confirmacion(-8548);
confirmacion(0);

/*EJERCICIO 10
CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO, (NUMERO ENTERO)
ME DE UNA CUENTA ATRÁS DE LOS NÚMEROS
*/

function regresion (x){
for (let i=x; i>=0; i--){
    console.log(i);
}
}

regresion(5);

/*EJERCICIO 11
CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO DE ENTRADA N, ME
DE LA SUMA DE TODOS LOS NUMEROS ENTRE 0 Y N
*/

let acumulacion = 0

function sumaDeNumeros (x){
    for (let i=x; i>=0; i--){
        // (acumulacion+=i); ESTO ES LO MISMO QUE
        // acumulacion = acumulacion+i ESTO
        console.log(acumulacion+=i) //EJ: i vale 6 y acumulacion 0 = 6+0 = 6 (subo i = 6) -1 (actu) = 5 / AHORA i vale 5 y acum 6 = 5+6 = 11 (subo i= 5) -1(actu) = 4 / ahora i vale 4 y acum valia 11 = 15...... 
    // console.log(acumulacion)
}
}

sumaDeNumeros(6);

/*EJERCICIO
USAR WHILE, CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO
ME MUESTRE DE MANERA REGRESIVA, EL NUMERO ENTRE 10*/


function regresion (n1){
    let i=0
    while (n1 >= i){
        console.log(n1/10);
        n1--
    } 
}

regresion(10);

