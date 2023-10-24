/*FOREACH Y MAP. MÉTODOS EXCLUSIVOS PARA ARREGLOS

METODOS DE UN ARRAY
SOLO SE PUEDEN EJECUTAR EN ARREGLOS, UNA VEZ POR CADA ELEMENTO
DEL ARRAY

PARTIMOS DEL ARRAY CARRITO
*/

let carrito = [{nombre:"remera",precio: 2},{nombre:"pantalon",precio: 3},{nombre:"gorra",precio: 4},{nombre:"zapatilla",precio: 10}];

// ANTES LO HACIAMOS CON EL FOR 

for (let i=0; i<carrito.length; i++){
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
    console.log(carrito[i].precio);
}

// AHORA CON EL FOREACH: PARA MOSTRAR POR CONSOLA 

carrito.forEach(function (producto) {
    console.log(producto, producto.nombre);
})

/*PASAR A FUNCIÓN DE FLECHA EL FOREACH ANTERIOR
*/
carrito.forEach(producto => console.log(producto,producto.nombre));

/* MAP
ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE
MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH
PARA MOSTRAR POR PANTALLA
*/

let nuevoArray = carrito.map(producto => producto.nombre);

console.log(nuevoArray);

//THIS: accede a las proiedasdes que tengo dentro de un objeto

/*EJERCICIO
CREAR UN OBJETO QUE SE LLAME RESERVA
CON PROPIEDADES (NOMBRE, APELLIDO, TOTAL, PAGADO)
Y LE DAIS VALORES

MEDIANTE LA SINTAXIS DE PUNTO MOSTRAR EL NOMBRE
*/

let reserva = {
    nombre: "Francisco",
    apellido: "Maldonado",
    total: 200,
    pagado: 120,
}

console.log(reserva.nombre)

// LOS OBJETOS TAMBIEN PUEDEN TENER FUNCIONES EN SU INTERIOR

// FORMAS DE AÑADIR PROPIEDADES A UN OBJETO 
// CREAR PROPIEDAD QUE SE LLAME INFORMACION Y FUNCION QUE SE LLAME INFORMACION 

 reserva.informacion = function(){
    return (`El cliente ${this.nombre} tiene una reserva de ${this.total} y a pagado ${this.pagado}`);
}

console.log(reserva.informacion());

// O TAMBIEN ES LO MISMO HACERLO ASI 

let reserva2 = {
    nombre: "Francisco",
    apellido: "Maldonado",
    total: 200,
    pagado: 120,
    informacion: function(){
        return (`El cliente ${this.nombre} tiene una reserva de ${this.total} y a pagado ${this.pagado}`)
    },
}

console.log(reserva2.informacion());

/*EJERCICIO
CREAR UN OBJETO LLAMADO FECHA
CON PROPIEDADES, AÑO, MES, DÍA, FALTANTES
CON UNA FUNCIÓN EN SU INTERIOR QUE ME DIGA 
CUANTOS DÍAS QUEDAN PARA ACABAR EL MES SI 
OCTUBRE TIENE 31 DÍAS
*/

let fecha = {
    año: 2023,
    mes: "octubre",
    dias: 24,
    faltantes: function () {
       return(`faltan ${31 - (this.dias)} dias`)
    } ,
}

console.log(fecha.faltantes());


let fecha2 = {
    a: 2023,
    m: 10,
    d: 24,
    faltante: function() {
        console.log(`faltan ${31 - this.d} dias para terminar el mes`);
        console.log(`faltan ${12 - this.m} meses para terminar el año`);
        console.log(`hoy es ${this.d}/${this.m}/${this.a} y faltan 
        ${11 - this.m} meses y ${31 - this.d} dias para terminar el año`);
    }
}
fecha2.faltante();