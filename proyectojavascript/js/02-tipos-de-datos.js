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






