// 3 FORMAS DE CREAR Y LLAMAR FUNCIONES

// DECLARACION DE LA FUNCION
sumar(10,20);

function sumar (n1,n2){
console.log(n1+n2);
}

sumar(39,45);

// EXPRESION DE LA FUNCION 

// sumar2(10,20); EN LA PRIMERA ETAPA NO LA RECONOCE COMO FUNCION SI NO COMO VARIABLE Y POR ESO ES QUE NO LA RECONOCE SI LA LLAMAMOS ANTES

let sumar2 = function (n3,n4){
    console.log(n3+n4);
    }
    
    
sumar2(39,45);

// IIFE DE LA FUNCION

(function(){
    console.log("Esto es una funcion")
})();
    
// DIFERENCIA ENTRE METODO Y FUNCION: LA DIFERENCIA ES QUE EL METODO YA TIENEN SU FUNCIONALIDAD Y A LAS FUNCIONES NOSOTROS LES DAMOS LA FUNCIONALIDAD 

let numero1 = 20;
let numero2 = "20";

console.log(typeof(parseInt(numero2))); //parseInt:ES UNA FUNCION: cambia de numero a string, YA TIENE SU FUNCIONALIDAD, EL NUMBRE DE LA FUNCION Y ENTRE PARENTESIS LA FUNCIONALIDAD QUE QUIERO APLICAR
console.log(typeof(numero1.toString())) //toString: ES UN METODO: pasa de string a numero, LO REPRESENTA POR EL PUNTO ENTRE EL NOMBRE Y LA FUNCIONALIDAD QUE QUIERO APLICAR


// EJERCICIO 1

function color(x) {
console.log(`El color elegido es ${x}`);
console.log("El color elegido es",x);
}

color("verde");
color("rojo");

// EL ARGUMENTO COMO LO LLAME ES COMO DESPUES LO TENGO QUE LLAMAR EN LA Function, IGUAL QUE EL NOMBRE COMO LO LLAME DESPUES LO TENGO QUE LLAMAR EN LA FUNCION 

function color(miColorElegidoEs) {
    console.log(`El color elegido es ${miColorElegidoEs}`);
    console.log("El color elegido es",miColorElegidoEs);
    }
    
    color("verde");
    color("rojo");


//EJERCICIO 2

function precios(importe, descuento){
    console.log("El Descuento Total es:",(importe*descuento));
    console.log("El Precio Final es:",(importe-descuento));
}

precios(200,20/100);
precios(1000,40/100);

// EJERCICIO 3

function tweet(texto) {
console.log("La Longitud del tweet es",(texto.length)); //UTILIZAMOS METODOS DENTRO DE FUNCIONES
}

tweet("EL TEXTO DEL TWEET");

//EJERCICIO 4

function parrafo(texto,palabra){
console.log("resultado para saber si el texto contiene la palabra", texto.includes(palabra));
}

parrafo("este es el texto que contiene la palabra","contiene");
parrafo("este es el texto que contiene la palabra","rojo");

//EJERCICIO 5

let frutas = ["pera", "manzana"];

function añadir(y){
     frutas.push(y);
}

añadir("fresa");

console.log("añado frutas",frutas);

/*function añadirFruta(array,k){
    array.push(k);
    console.log(array)
}

let frutas=["pera","platano"];
añadirFruta(frutas,123456789);
console.log(frutas)*/


// let frutas = ["pera", "manzana"];

// function añadir(y){
//     console.log("resultado de añadir frutas",frutas.push(y));
// }

// añadir("fresa");




//EJERCICIO 6

function restar(n1,n2){
    console.log("resultado de la resta",(n1-n2));
    }
    
restar(39,45);


// CREAR UNA FUNCIÓN QUE SOLUCIONE LAS ECUACIONES DE SEGUNDO GRADO
// X=(-B +-SQRT(B*B -4*A*C))/2*A
 
// A, B, C
// ecuacionSegundo
// */

function ecuacionSegundo(A = 0, B = 0, C = 0) {
    console.log("Resultado operacion segundo Grado +:", (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A));
    console.log("Resultado operacion segundo Grado -:", (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A));
};

ecuacionSegundo(2, 10, 1);
ecuacionSegundo(2, 10);

// FUNCIONES QUE RETORNAN VALORES

function multiplicar(n1, n2) {
    return n1 * n2; // ME RETORNA UN VALOR
}

let valorRetornado = multiplicar(2, 5);
console.log("EL VALOR RETORNADO ES:", valorRetornado);


// function multiplicar(n1, n2) {
//     console.log("EL VALOR RETORNADO ES:", n1 * n2); } // ME RETORNA UN VALOR


//OTRA FUNCIÓN UN POCO MAS COMPLEJA

let total = 0;

function agregarCarrito(precio) {
    
    return total += precio;
}

agregarCarrito(200);
agregarCarrito(500);
agregarCarrito(600);

console.log("EL TOTAL A PAGAR ES DE:", total)

/*EJERCICIO
REALIZAR UNA FUNCIÓN QUE CALCULES EL DESCUENTO QUE SE INDIQUE DE LOS
PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME
*/


let totalAhorrado=0;
let descuento=20;

function calcularDescuento(precio=0){
    return totalAhorrado+=(precio*descuento/100)
}

calcularDescuento(200);
calcularDescuento(500);
calcularDescuento(600);

console.log("EL DESCUENTO TOTAL ES DE:",totalAhorrado)

// MÉTODOS DE PROPIEDAD

// SON FUNCIONES CON LA SINTAXIS DE MÉTODO
// VAMOS A CREAR UN REPRODUCTOR MUSICAL

let reproductor ={ // ES UN OBJETO DE FUNCIONES
    reproducir : function(nc){ 
        console.log(`Reproduciendo Canción con ID: ${nc}`)
    },
    
    pausar : function(){
        console.log("PAUSANDO CANCIÓN...")
    },

    crearPlaylist : function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    }
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist("Metal");

// AÑADIR UNA NUEVA PROPIEDAD AL OBJETO
// QUE SEA UNA FUNCIÓN BORRAR



// AÑADIMOS UNA PROPIEDAD MÁS
reproductor.borrarCancion = function(id){
    console.log(`Borrando Canción con ID: ${id}`)
}

reproductor.borrarCancion(34);

//ESCRIBIR NOMBRE Y APELLIDO

function nombreCompleto(nombre,ap1,ap2){
    console.log("Nombre Completo:",nombre+" "+ap1+" "+ap2)
    // console.log(nombre,ap1,ap2)
    // console.log(`${nombre} ${ap1} ${ap2}`)
}

nombreCompleto("Federico","García","Lorca");

/*FUNCIONES DE FLECHA / ARROW FUNCTION

        SINTAXIS MÁS CORTA

        PARTIREMOS DE LA EXPRESIÓN DE LA FUNCIÓN 
*/

//EXPRESIÓN DE LA FUNCIÓN
let triplicar = function(numero=1){
    return numero*numero*numero;
}
let valorTriplicado = triplicar(12);
console.log(valorTriplicado)

/*  ARROW FUNCTION
    PASOS
    
        ELIMINAR EL FUNCTION
        AÑADIR => FLECHA ANTES DE LA LLAVE DE APERTURA
        CUANDO SOLO SE TIENE UNA LINEA EN EL CUERPO DE LA FUNCIÓN PODEMOS ELIMINAR LAS LLAVES
            SI HAY MÁS DE UNA HAY QUE PONERLA {}
        CUANDO SOLO SE TIENE UN PARÁMETRO SE PUEDE ELIMINAR LOS PARÉNTESIS
            SI HAY MAS DE UN PARAMETRO, VACIO, O INICICIALIZADO HAY QUE PONERLO()
        EL RETURN VA IMPLICITO EN EL CUERPO DE LA FUNCIÓN, SE PUEDE OMITIR SU VA SOLO
            SI HAY MÁS DE UNA LINEA EN EL CUERPO DE LA FUNCIÓN HAY QUE PONERLO
    */

let triplicarFlecha = (numero=1) => numero*numero*numero;

let valorTriplicado2 = triplicarFlecha(12);
console.log(valorTriplicado2)


/*EJERCICIO
CREAMOS NUEVO ARROW FUNCTION, aprendiendo, QUE  DEVUELVA UN NUMERO +7 Y LO 
ALMACENE EN UNA VARIABLE resultadoAprendiendo*/

let aprendiendo = (numero=1) => numero+7;

let resultadoAprendiendo = aprendiendo(12)
console.log(resultadoAprendiendo)

/*EJERCICIO

CONVERTIR CADA UNA DE LAS SIGUIENTES FUNCIONES EN ARROW FUNCTION
COPIAR EL ARRAY CARRITO DEL FINAL DEL ARCHIVO 04-arrays.JS*/

let carrito = [{nombre:"remera",precio: 2},{nombre:"pantalon",precio: 3},{nombre:"gorra",precio: 4},{nombre:"zapatilla",precio: 10}];

// PONER CON ARROW FUNCTION

resultado = carrito.filter( producto=>producto.precio > 1);
console.log("USO DE FILTER CON ARROW FUNCTION", resultado);


/*
EJERCICIO 1.
CREAR UNA FUNCIÓN QUE SUME 3 NUMEROS DADOS. PONERLA CON EXPRESION, DECLARACIÓN Y COMO FUNCIÓN DE FLECHA
sumaDeclaracion
sumaExpresion
sumaFlecha
Y MUESTRE RESULTADOS POR CONSOLA

*/

function sumaDeclaracion (n1,n2,n3){
    console.log(n1+n2+n3)
}

sumaDeclaracion(1,2,3)

let sumaExpresion = function(n1,n2,n3){
    console.log(n1+n2+n3);
}

sumaExpresion(10,20,30)

let sumarFlecha = (n1,n2,n3) => console.log(n1+n2+n3);

sumarFlecha(2,5,7)

/*
EJERCICIO 2
CREAR UNA FUNCIÓN QUE BUSQUE ELEMENTOS DE UN ARRAY NUMEROS.
PONERLA CON EXPRESION, DECLARACIÓN Y COMO FUNCIÓN DE FLECHA
buscaExpresion
buscaDeclaracion
buscaFlecha

*/

// DECLARACION 

let numeros = [1,2,3,4]

function buscaDeclaracion (array,numeroABuscar){
    console.log(array.includes(numeroABuscar))
}

buscaDeclaracion(numeros,1)


// EXPRESION 

let buscaExpresion = function (array,numeroABuscar){
    console.log(array.includes(numeroABuscar))
}

buscaExpresion(numeros,2)

//FLECHA

let buscaFlecha = (array,numeroABuscar) => console.log(array.includes(numeroABuscar))

buscaFlecha(numeros,3)

