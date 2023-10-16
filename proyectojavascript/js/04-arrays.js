// CREAMOS 3 VARIABLES
let variableA = "Valor VarA"
let variableB = "Valor VarB"
let variableC = "Valor VarC"

// CREAMOS OBJETO EJERCICIO6 SIN PROPIEDADES
let ejercicio6 = {};

// CREAMOS PROPIEDADES A ESE OBJETO A PARTIR DE LAS VARIABLES
ejercicio6.variableA=variableA;
ejercicio6.variableB=variableB;
ejercicio6.variableC=variableC;

console.log ("ejercicio6",ejercicio6);

// CREAMOS ARRAYS

let numeros = [10,20,30,40,50];
console.log("Mi primer array", numeros);
console.table(numeros);

let meses = ["enero","febrero","marzo"];
console.table(meses);

let diaSemana = ["lunes","martes","miercoles","jueves","viernes"];
console.table(diaSemana);

let mezclaDatos =["hola",10,true,null,[1,2,3]];
console.table(mezclaDatos);

// ACCEDEMOS A LOS VALORES DE LOS ARRAYS

console.log("ACCEDIENDO A LOS VALORES DEL ARRAY NUMEROS CON EL INDICE 2:",numeros[2]);

console.log("ACCEDEMOS A LUNES Y JUEVES DEL ARRAY DIA SEMANA:",diaSemana[0],diaSemana[20]);




// EJERCICIO ARRAYS DENTRO DE OBJETOS

let finde = {
    prop1: "string",
    prop2: 3,
    prop3: true
};

finde.finSemana=["Sabado","Domingo"];
console.log(finde);

let {prop1,prop2,prop3} = finde;
console.log("resultado finde",prop1,prop2,prop3);

// METODOS PARA LOS ARRRAYS

// METODO LENGTH 

console.log("Longitud del Array Meses:",meses.length);

// AHORA VAMOS A VER COMO ELIMINAR/MODIFICAR/AÑADIR ELEMENTOS A LOS ARRAYS

numeros[5] = 60;
// SI NO EXISTE ESE INDICE ME LO AGREGARÁ, PERO ESTA FORMA NO ES MUY
// USADA, PUES DEBEMOS SABER LA EXTENSIÓN DEL ARREGLO

numeros[2] = 120; // SI ESTE INDICE EXISTE, NOS MODIFICA EL VALOR
console.table(numeros);

// METODO PUSH, AÑADE UN ELEMENTO AL FINAL DEL ARRAY
// NO NECESITAMOS SABER LA DIMENSIÓN DEL ARREGLO

numeros.push(70); // AÑADE 70 AL FINAL DEL ARRAY
numeros.push(80, 90, 100) // PUEDES AÑADIR TANTOS VALORES COMO DESEES

// NO ES BUENA PRACTICA MODIFICAR LOS ARRAYS ORIGINALES

numeros.unshift(-10, 129020, -30); // AÑADE ELEMENTOS AL INICIO
console.log(numeros);

// ELIMINAR ELEMENTOS DE UN ARRAY

numeros.pop(); // ME ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
console.log(numeros);

numeros.shift(); // ELIMINA EL PRIMER ELEMENTO
console.log(numeros);
console.table(numeros);

// ELIMINAR X ELIMENTOS A PARTIR DEL Y splice(Y,X)
numeros.splice(2, 3); // (INDICE, VALORES A ELIMINAR)
console.log(numeros)

// LAS DESVENTAJAS ES QUE ESTAMOS MODIFICANDO EL ARRAY ORIGINAL
// PARA EVITAR ESO, CREAMOS UN ARRAY NUEVO CON REST/SPREAD OPERATOR

const nuevoArreglo = [16,...numeros,1540];
console.log(nuevoArreglo);
console.table(nuevoArreglo);


// EJERCICIO

let estaciones = ["verano"];

estaciones.unshift("primavera");

estaciones.push("otoño","invierno");

console.log(estaciones);

// EJEMPLO DE ARRAYS DE OBJETOS

let carrito = [{nombre:"remera",precio: 2},{nombre:"pantalon",precio: 3},{nombre:"gorra",precio: 4},{nombre:"zapatilla",precio: 10}];

console.log(carrito)
console.table(carrito)


// METODO INCLUDE

let resultado;

resultado = meses.includes("Mayo");
console.log("USO DE INCLUDES PARA BUSCAR EN ARRAY PLANO", resultado);

// METODO SOME 

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet" //ME DEVOLVERÁ TRUE/FALSE
});
console.log(resultado);

// COMO SABER EL TOTAL DEL CARRITO. REDUCE

resultado = carrito.reduce(function (total, producto) { // PARA ITERAR
    // TOTAL, PRODUCTO SON LOS PARAMETROS DE LA FUNCION
    return total + producto.precio
}, 0); // EL VALOR DONDE INICIA
console.log("USO DE REDUCE", resultado);

// FILTER, PARA FILTRAR
// EL MÁS UTILIZADO

resultado = carrito.filter(function (producto) {
    return producto.precio > 1
});
console.log("USO DE FILTER", resultado);


// TIPOS DE COMPARADORES

// === IGUALES
// == IGUALES PERO NO ESTRICTAMENTE
// !== DIFERENTES
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL






