// TRES FORMAS DIFERENTE PARA CREAR VALORES TIPO STRING 

const producto1 = "Juego de mesa DUERME duerme"; // LA MAS USADA LE ASIGNAMOS VALOR ENTRE COMILLAS
const producto2 = String("DOBLE"); //SON OBJETOS POR ESO EN CONSOLA SALEN VARIOS ELEMENTOS
const producto3 = new String ("UNO"); 

console.log("PRODUCTO1", producto1);
console.log("PRODUCTO 2 CON STRING", producto2);
console.log("PRODUCTO 3 CON NEW STRING", producto3);

// TYPEOF PARA VER EL TIPO DE DATO QUE TIENE LA VARIABLE

console.log ("TYPEOF PRODUCTO1",typeof producto1,producto1);
console.log("TYPEOF PRODUCTO2",typeof producto2);
console.log ("TYPEOF PRODUCTO3",typeof producto3);

//EJEMPLOS DE COMO DAR VALORES A LA VARIABLES Y VEMOS EL DATO QUE NOS DA LA VARIABLE

let ejemplo = 100;
let ejemplo2 = "200";
let ejemplo3 = false;
let ejemplo4 = "false";

console.log ("TIPO DE DATO NUMERO 100",typeof ejemplo);
console.log ("TIPO DE DATO NUMERO 200",typeof ejemplo2);
console.log ("TIPO DE DATO FALSE",typeof ejemplo3);
console.log ("TIPO DE DATO FALSE ENTRE COMILLAS",typeof ejemplo4);







//METODOS PARA LOS VALORES TIPO STRINGS

// METODO LEGTS QUE MUESTRA LA CANTIDAD DE CARACTERES QUE TIENE UN VALOR 

console.log ("METODO LEGTH", producto1.length); //ME DICE LA LONGITUD DE LA VARIABLE

// METODO indexOf (SI O SI ESCRIBIRLO ASI) SIRVE PARA BUSCAR UNA PALABRA QUE EXISTE EN UNA CADENA DE TEXTO Y ME DA LA POSICION

console.log("METODO INDEXOF", producto1.indexOf("DURME")); //ME DA LA POSICION DE INICIO OSEA LA LETRA INICIAL, SI LO ENCUENTRA
console.log("METODO INDEXOF", producto1.indexOf("JUEGA")); //ME LA -1 CUANDO NO LO ENCUENTRA
console.log("METODO INDEXOF", producto1.indexOf("duerme")); //DEPENDE DE COMO ESCRIBA LA PALABRA EN EL VALOR DE LA VARIABLE

//METODO INCLUDES, BOOLEANO ME DICE SI ES VERDADERO O FALSO, SI ESTA O NO

console.log("METODO INCLUDES", producto1.includes("duerme"));
console.log("METODO INCLUDES", producto1.includes("JUEGA"));

// EJERCICIO 1 CON VALORES TIPO STRING Y LOS 3 METODOS 

const practica1 = "hola"; 
let practica2 = "     false";
var practica3 = "0   ";

console.log("PRACTICA 1", practica1.length);
console.log("PRACTICA 2", practica2.indexOf("false"));
console.log("PRACTICA 3", practica3.includes("0"));






//METODOS PARA LOS VALORES TIPO NUMBER

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200";
let numero4 = 2/3;

console.log("NUMERO 1",numero1);
console.log("NUMERO 2",numero2);
console.log("NUMERO 3",numero3);
console.log("NUMERO 4",numero4);

console.log("TIPO DE DATO NUMERO 1", typeof numero1);
console.log("TIPO DE DATO NUMERO 2", typeof numero2);
console.log("TIPO DE DATO NUMERO 3", typeof numero3);
console.log("TIPO DE DATO NUMERO 4", typeof numero4);

console.log("NUMERO 1 + NUMERO 2",numero1 + numero2);
console.log("NUMERO 1 - NUMERO 2",numero1 - numero2);
console.log("NUMERO 1 * NUMERO 2",numero1 * numero2);
console.log("NUMERO 1 / NUMERO 2",numero1 / numero2);
console.log("NUMERO 1 % NUMERO 2",numero1 % numero2);

//BUSCAR FUNCIONES MATEMATICAS EN CONSOLA

// BUSCAR WINDOW Y DISPLEGAR LA PESTAÑA: BUSCAR METODO MATH 

// MATH RANDOM DA UN NUMERO ALEATORIO ENTRE 0 Y 1

let resultado = Math.random();
console.log("METODO MATH RANDOM",resultado);

// EJERCICIO METODO RAUND NUMERO ENTRE 0 Y 30

resultado = Math.round(Math.random()*30);
console.log("METODO MATH RAUND: NUMERO ALEATORIO ENTRE 0 Y 30",resultado);

// EJERCICIO METODO PI PARA SACAR EL AREA EN FUNCION DEL DIAMETRO

let diametro = 5;

let area = Math.PI*Math.pow(diametro/2,2);
console.log("METODO PI",area);

// EJERCICIO DEL DADO

let dado;

dado = Math.round(Math.random()*5+1);
console.log("CREAMOS UN DADO", dado);

//EJERCICIO COMBINADO ORDEN

let resultadoOrden1 = (20+30)*2;
console.log("RESULTADO ORDEN 1",resultadoOrden1);

let resultadoOrden2 = 20+30*2;
console.log("RESULTADO ORDEN 2",resultadoOrden2);

//EJERCICIO CALCULAR DESCUENTO Y EL TOTAL A PAGAR

// DESCUENTO = 40% (40% ES LO MISMO QUE 0,4 / 100% ES LO MISMO QUE 1 / 10% ES LO MISMO QUE 0,1 / CONCLUSION X% ES X/100)
// IMPORTE = TOTAL SIN DESCUENTO
// AHORRO = DINERO AHORRADO
// TOTAL = TOTAL A PAGAR 

let prenda1 = 120, 
    prenda2 = 85, 
    prenda3 =24;

let descuento = 40/100;
let importe = ( prenda1+ prenda2+ prenda3);
let ahorro = importe*descuento;
let total = importe - ahorro;

console.log("DESCUENTO",descuento);
console.log("IMPORTE",importe);
console.log("AHORRO",ahorro);
console.log("TOTAL",total);

// INCREMENTOS/DECREMENTOS

let meGusta=0;

meGusta+=15; //INCREMENTA EN 1 EL VALOR DE meGusta // meGusta=meGusta+15
meGusta-=6; //meGusta=meGusta-6; meGusta=meGusta+1; //meGusta =meGusta + meGusta+= 19

meGusta++; //INCREMENTA EN 1 EL VALOR DE meGusta

console.log("USO DE INCREMENTOS,ME GUSTA:",++meGusta) //console.log("USO DE INCREMENTOS ME GUSTA 2:",meGusta++);

// EJERCICIO

const nombre = "MelisaFernandez";
const email = "@gmail.com";

console.log("EJERCICIO NOMBRE MAS EMAIL: ",nombre+" "+email)
console.log(`EJERCICIO NOMBRE MAS EMAIL: ${nombre+" "+email} `)

// HACIENDO USO DE LA CONCATENACIÓN 

// console.log(nombre + email); SOLUCIONAR EL ESPACIO
// console.log(nombre + " " + email);
// console.log("Nombre: " + nombre + " Email: " + email);
// console.log(nombre,email);

// SINTAXIS ANTIGUA
console.log("ESTE ES EL NOMBRE",nombre)

// AHORA LO SOLUCIONAMOS CON TEMPLATE STRING
console.log(`ESTE ES EL NOMBRE: ${nombre}`)





//METODOS PARA LOS VALORES TIPO BOOLEANO


let boolean1 = true;
let boolean2 = false;
let boolean3 = "true";

console.log("TIPO DATO BOOLEAN1:", typeof boolean1);
console.log("TIPO DATO BOOLEAN2:", typeof boolean2);
console.log("TIPO DATO BOOLEAN3:", typeof boolean3);

let boolean4 = new Boolean(true);
console.log("TIPO DATO BOOLEAN4:", typeof boolean4);









