/*PROGRAMACIÓN ORIENTADA A OBJETOS, POO

JAVASCRIPTS HACE USO DE PROTOTYPES

*/

//OBJECT LITERAL, MANUAL
const producto = {
    nombre : "tablet",
    precio : 500
}




// OBJECT CONSTRUCTOR, DINÁMICO
// SINTAXIS MUY SIMILAR A UNA FUNCION
// CREAMOS UNA CLASE, QUE ES UN CONTENEDOR DE DATOS
// OBJETIVO, CREAR OBJETOS DE MANERA MÁS DINAMICA
// UNA CLASE ME VA SERVIR PARA ALMACENAR
// LOS DATOS QUE VA A TENER UN OBJETO EN ESPECIFICO




// LE PONEMOS EL NOMBRE DE LA CLASE SIEMPREINICIO EN MAYUS 
function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
    this.nombreObjeto = nombre;
    this.precioObjeto = precio; //LE PUEDO DAR EL NOMBRE QUE QUIERA,SE LE SUELE DAR EL MISMO
    this.categoria = categoria;
    this.disponibilidad = disponibilidad;
}


// CREAMOS UNA INSTANCIA (LLAMAR Y EVALUAR)

let producto2 = new ProductoClase ("Monitor curvo",800,true,"tech");
let producto3 = new ProductoClase ("PC",1800);
let producto4 = new ProductoClase ("Reloj",800);

console.log(producto2);
console.log(producto3);
console.log(producto4);

/*EJERCICIO
CREAR UN OBJETO CON OBJECT CONSTRUCTOR 
LLAMADO FECHA
CON PROPIEDADES, AÑO, MES, DÍA
DAR 4 VALORES DISTINTOS
*/

function Fecha (año,mes,dia){
    this.año = año;
    this.mes = mes;
    this.dia = dia;

}

let fecha1 = new Fecha (2004,05,01);
let fecha2 = new Fecha (2023,10,25);
let fecha3 = new Fecha (2023,10,26);
let fecha4 = new Fecha (2023,10,27);

console.log (fecha1);
console.log (fecha2);
console.log (fecha3);
console.log (fecha4);

/*

PROTOTYPES
ME PERMITE CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO
ESPECIFICO

// NO SE UTILIZA MUCHO, VEREMOS LUEGO LA ALTERNATIVA CON LAS CLASES

*/

// FORMATEAR UN PRODUCTO ES LO MISMO QUE DETALLAR 

ProductoClase.prototype.formatearProducto = function() {
    return(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`);
};

// CREAR INSTANCIAS PARA PRODUCTOS 5,6,7

let producto5 = new  ProductoClase ("celular",733,true,"iphone")
let producto6 = new ProductoClase ("auriculares",50,true)
let producto7 = new ProductoClase ("play",1000)

console.log(producto5.formatearProducto());
console.log(producto6.formatearProducto());
console.log(producto7.formatearProducto());

//SEGUNDA FORMA DE HACERLO, LA MÁS USADA

//CLASES EN JAVASCRIPT
/*

OTRA FORMA DE CREAR OBJETOS MEDIANTE CONSTRUCTORES

*/
class ProductoClase2{
    constructor(nombre, precio) { //ES UNA FUNCIÓN YA EN SI
        this.nombreObjeto2=nombre;
        this.precioObjeto2=precio;
    }

    formatearProducto2(){
        return(`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`);
    }
    descuento (){
    return(`El precio final con el descuento es de ${this.precioObjeto2/(1.2)}`)
    }
}

//INSTANCIAS
let producto8 = new ProductoClase2("TV nueva",678);

console.log(producto8);
console.log(producto8.formatearProducto2());
console.log(producto8.descuento());

// AÑADIR UN NUEVO METODO QUE ME CALCULE EL PRECIO CON UN 20% DESCUENTO

/*

POO HERENCIA

        LA HERENCIA NOS PERMITE CREAR CLASES PARTIENDO DE CLASES YA CREADAS
        


EJERCICIO
CREAR UN OBJECT CONSTRUCTOR Libro CON PROPIEDADES nombre, precio, isbn
HACIENDO USO DEL CONSTRUCTOR
Y GENERAR UNA INSTANCIA AL MENOS
*/



class Libro {
    constructor(nombre,precio,isbn){

        this.nombre=nombre;
        this.precio=precio;
        this.isbn=isbn;
    }
}

let libro1 = new Libro ("Padre Rico Padre Pobre",15, 946587);
console.log(libro1);

// PARA QUE USAMOS LA HERENCIA, PARA COPIAR PROPIEDADES DE UNA CLASE A OTRA, UTILIZAMOS LA PALABRA EXTENDS

class Biblioteca extends Libro {
    constructor(nombre,precio,isbn,categoria){
        super(nombre,precio,isbn); //CON EL SUPER ELEGIMOS QUE PROPIEDADES HEREDAR
        this.categoria=categoria;

    }formatearProducto3(){
        return(`El producto ${this.nombre}pertenece a la categoria ${this.categoria}`)
    }
}

// INSTANCIA 
let  libroObjeto2 = new Biblioteca("Curso Fullstack",120,912229,"Programación");
console.log(libroObjeto2);
console.log(libroObjeto2.formatearProducto3())


// LOS METODOS NO LOS PODEMOS HEREDAR POR QUE EL METODO ANTERIOR DEPENDEN DEL CONSTRUCTOR


/*EJERCICIO
CREAR UN OBJECT CONSTRUCTOR COCHE
CON PROPIEDADES MARCA, AÑOCOMPRA, MOTOR, MATRICULA
UNA FUNCIÓN QUE ME DIGA EL NÚMERO DE AÑOS QUE TIENE EL COCHE

CREAR DOS INSTANCIA, UNA PARA TU COCHE, Y OTRA EL DE TU PADRE


*/

class Auto {
    constructor(marca,añoCompra,motor,patente){
        this.marca =marca;
        this.añoCompra = añoCompra;
        this.motor = motor;
        this.patente = patente;
    } añosQueTieneElAuto(){
        return(`El Auto tiene  ${añoActual-this.añoCompra} años`)
    }
}

let tuAuto = new Auto ("Audi",2020, 2.0,"ES5975");
let autoDeTuPadre = new Auto ("Mercedes",2002, 1.8,"ES5975");
let añoActual = new Date().getFullYear(); //SIRVE PARA QUE NOS DIA LA FECHA ACTUAL

console.log(tuAuto);
console.log(tuAuto.añosQueTieneElAuto());

console.log(autoDeTuPadre);
console.log(autoDeTuPadre.añosQueTieneElAuto());

// CREAR OTRO CONSTRUCTOR DE OBJETOS LLAMADO ITV QUE HEREDE DE LA CLASE COCHE AÑOCOMPRA, MATRICULA Y AÑADA AÑOITV
// Y MEDE UN METODO CON EL TIEMPO QUE ME FALTA PARA LA PROXIMA ITV 

class Itv extends Auto{
    constructor (añoCompra,patente,añoItv){
        super(añoCompra,patente)
            this.añoItv = añoItv;
        } proximaItv(){
            return (`Faltan ${this.añoItv-añoActual} años para la Itv`);
        }
    }

tuAuto = new Itv (2020,"ES845S", 2024);
console.log(tuAuto)
console.log(tuAuto.proximaItv())




