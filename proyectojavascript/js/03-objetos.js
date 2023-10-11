"use strict"; // OBJETOS DE JAVASCRIPT

let nombreProducto = "coca cola";
let precio = 200;
let disponible = true;

// ESTRUCTURA DE UN OBJETO

let producto = {
    nombreProducto:"coca cola",
    precio: 200,
    disponible: true
}

console.log("MI PRIMER OBJETO producto: ",producto);
console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto}`, producto);

// SINTAXIS DE PUNTO PARA ACCEDER A LAS PROPIEDADES DEL OBJETO

console.log("USO DE SINTAXIS DE PUNTO producto.precio:", producto.precio);

console.log(`USO DE SINTAXIS DE PUNTO CON TEMPLATE STRING: ${producto.precio}`);

console.log("USO DE SINTAXIS DE CORCHETES",producto["precio"]);


// MODIFICAR OBJETOS UNA CARACTERISTICAS QUE TIENEN LOS OBJETOS ES QUE PODEMOS AGREGAR, QUITAR Y MODIFICAR INFORMACIÓN DE ELLOS

// VAMOS AÑADIR UNA PROPIEDAD NUEVA AL OBJETO producto QUE YA TENEMOS CREADO


producto.categoria = "joyería";

console.log("AÑADIR CATEGORIA a producto: ",producto);

// PARA ELIMINAR PROPIEDADES USAMOS delete
// VAMOS A BORRAR LA PROPIEDAD DISPONIBLE

delete producto.disponible;

console.log("BORRAMOS DISPONIBLE a producto: ",producto);

// MODIFICAR. LLAMAMOS A LA PROPIEDAD Y ASIGNAMOS NUEVO VALOR

producto.precio=500;

console.log("MODIFICAMOS PRECIO a producto: ",producto);


const precioProducto = producto.precio;

console.log("CREAMOS VARIABLE A PARTIR DE LA PROPIEDAD PRECIO de producto: ",precioProducto);

// EJERCICIO

let nombreProductoProducto = producto.nombreProducto;

console.log("CREAMOS VARIABLE A PARTIR DE LA PROPIEDAD nombreProducto: ",nombreProducto);

// DESTRUCTURING AL PRECIO


//const {disponible} = producto;
//COMENTAR PREVIAMENTE NOMBREPRODUCTO
//const {disponible,precio,nombreProducto} = producto;//USO DE LLAVES, EN EL INTERIOR DE LA PROPIEDAD
// console.log("CREAMOS VARIABLE precio CON DESTRUCTURING:",precio);
//console.log(`CREAMOS VARIABLE disponible CON DESTRUCTURING: ${disponible}`);


// EJERCICIO

let playa = {
    nombre: "Barceloneta",
    ubicacion: "Barcelona",
    recomendable: true,
    temperaturaAgua: 24
}

const {nombre,ubicacion,recomendable,temperaturaAgua} = playa;
console.log(`En la Playa ${nombre} que esta en ${ubicacion} es recomendable ir ${recomendable} porque el agua esta a ${temperaturaAgua}`);

// UNA VARIABLE CON CONST NO SE PUEDE MODIFICAR

// PERO LAS PROPIEDADES DE UN OBJETO CREADO CON CONST SI PODEMOS MODIFICARLAS


//MÉTODOS PARA LOS OBJETOS

    //UN OBJETO A PESAR DE ESTAR CREADO CON CONST, SI QUE PODEMOS AÑADIR Y ELIMINAR PROPIEDADES. ES UNA CARACTERISTICA DE LOS OBJETOS

    //SI QUEREMOS CONGELAR UN OBJETO PARA QUE NO SE PUEDAN MODIFICAR LAS PROPIEDADES, HACEMOS USO DE Object.freeze(producto);

Object.freeze(producto);

// INTENTAMOS AÑADIR UNA PROPIEDAD NUEVA. CONGELADO

// producto.congelado = "intentamos congelarlo";

console.log("INTENTO AÑADIR UNA PROPIEDAD TRAS EL FREEZE", producto); 

// Object.freeze(producto); // NO ME PERMITIRÁ MODIFICAR EL OBJETO

//COMO SABEMOS SI UN OBJETO ESTÁ CONGELADO? HACEMOS USO DE UN MÉTODO PARA OBJETOS

console.log("ESTA CONGELADO??",Object.isFrozen(producto));

//FREEZE NO ME PERMITE NI AÑADIR, NI QUITAR NI MODIFICAR PROPIEDADES
//producto.disponible = false; NO ME MODIFICARÁ EL VALOR DE LA PROPIEDAD, PUES ESTÁ CONGELADO CON FREEZE

//CON EL METODO Object.freeze
    //NO PODEMOS AÑADIR PROPIEDADES
    //NO PODEMOS BORRAR PROPIEDADES
    //NO PODEMOS MODIFICAR PROPIEDADES

//CON EL MÉTODO Object.Seal
    //NO PODEMOS AÑADIR PROPIEDADES
    //NO PODEMOS BORRAR PROPIEDADES
    //SI PODEMOS MODIFICAR PROPIEDADES


// EJERCICIO

let medidas = {
    peso: 23,
    alto: 1.50,
    ancho: 40,
    profundidad: 10
}

Object.seal(medidas);

medidas.peso = 1;

// medidas.dimencion = 8; SI INTENTO AGREGAR UNA PROPIEDAD NO ME DEJA

console.log("MOSTRAMOS COMO SE PUEDE MODIFICAR CON SEAL", medidas); 

// UNIR DOS OBJETOS CON EL SPREAD/REST OPERATOR

let nuevoProducto = {...producto,...medidas};
console.log("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);


//const nuevoProducto = {...producto, ...medidas}; //ME AÑADE 
// A UN NUEVO OBJETO LLAMADO nuevoProducto TODAS LAS PROPIEDADES DE
// LOS OBJETOS, productos y medidas
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);
