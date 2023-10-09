// alert("hola mundo");

//PUEDO COMENTAR CON // O /*

// JAVASCRIPT NO ES UN LENGUAJE TIPADO

let producto = "nombre del producto"; //let = VARIABLE, producto = INICIALIZAR EL VALOR, "nombre del producto" = VALOR
let disponible; //HEMOS CREADO LA VARIABLE
disponible = true; //LLAMAMOS LA VARIABLE (REASIGNANDO VALOR A LA VARIABLE)
disponible = "no hay producto"; //LLAMAMOS LA VARIABLE (REASIGNANDO VALOR A LA VARIABLE)
disponible =564; //LLAMAMOS LA VARIABLE (REASIGNANDO VALOR A LA VARIABLE)

//EN VEZ DE PONER VARIAS VECES LA VARIABLE
// let camiseta = "red";
// let pantalon = "yellow";
// let zapato = "blue";

//PODEMOS SIMPLIFICARLO DE ESTA MANERA
let camiseta = "red",
    pantalon = "yellow",
    zapato = "blue";

//UTILIZAMOS CONSOLE

console.log("COLOR DE CAMISETA", camiseta); // LO QUE ESTA ENTRE "" ES LO QUE MUESTRA EN LA PANTALLA Y LA INFORMACION QUE VEMOS
console.log("COLOR DE PANTALON",pantalon);

zapato="negro";

console.log("COLOR DE ZAPATO",zapato)

// EJEMPLO ERROR DE SINTAXIS

//let 1ejercicio = "ejemplo error de sintaxis"; //EN CONSOLE DICE DONDE ESTA EL ERROR EN LA FILA 34,CARACTER 5.

// DISTINTOS TIPOS DE ESTILOS PARA NOMBRAR LAS VARIABLES

let nombre_producto = "A"; // UNDERSCORE con los espacios no hay problema
let nombreProducto = "A"; // CAMELCASE (el mas usado)
let NombreProducto = "A"; //PASCAL CASE
let nombreproducto = "A" //

//EJEMPLO DE CONST CON ERROR SIN INICIALIZARLE UN VALOR

//const constante; 

// COMO SE TIENE QUE HACER ES CON VALOR 

const contante ="valor contante";
console.log(contante);




