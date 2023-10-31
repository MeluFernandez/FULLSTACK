/*COMO CREAR ELEMENTOS EN HTML DESDE JAVASCRIPT

**********************************************
VEREMOS COMO GENERAR CODIGO EN HTML DESDE JAVASCRIPT
UN ESTADO NUEVO DE FACEBOOK SE GENERA POR JAVASCRIPT*/

const ejercicioEnlace = document.createElement("A");//NOS PERMITE CREAR CODIGO HTML
//JAVASCRIPT RECOMIENDA USAR MAYUSCULAS CUANDO USAMOS CREATE
//AGREGAR HREF
ejercicioEnlace.href = "#";
//AGREGAR TEXTO
ejercicioEnlace.textContent = "Ejercicio Enlace";
//AGREGAR CLASE
ejercicioEnlace.classList.add("enlaces");//LE AÑADO LA CLASE
//AGREGAMOS AL DOCUMENTO
//LO QUEREMOS AGREGAR A LA DERECHA DEL BOTON INFORMATE

const selectorEjercicioEnlace =document.querySelector(".navPrincipal");//PARA ELLO SELECCIONAMOS EL ELEMENTO PADRE
selectorEjercicioEnlace.appendChild(ejercicioEnlace)//APPENCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS



/*
**************************************************

!!!!!!!!!!!!!!!!!!!
EJERCICIO

CREAR UNA PANTALLA EMERGENTE QUE PIDA INFORMACIÓN SOBRE TU NOMBRE.
AÑADIR ESTE NOMBRE AL TITULO H1 QUE TENÍAMOS CREADO AYER
*/


//  let nombreAp = prompt("escribe tu nombre");

//  let tituloh1 = document.querySelector("h1");

//  tituloh1.textContent=nombreAp;





/*
EVENTOS EN JAVASCRIPT

ME PERMITEN TENER UNA WEB MÁS DINÁMICA

CUANDO ALGUIEN VISITA UNA WEB, SURGEN MUCHOS EVENTOS
SCROLL, BOTON ENVIAR FORMULARIO, CLICKS

HAY EVENTOS QUE LOS GENERA EL USUARIO Y HAY OTROS QUE SE GENERAN AUTOMATICAMENTE

//EVENTO LOAD
*/
console.log(1);

window.addEventListener("load",function(){ // AÑADIMOS EVENTOS CON ADDEVENTLISTENER
//PRIMERO LE DECIMOS QUE TIPO DE EVENTO VAMOS A TENER, LOAD, CLICK, SCROLL...
//DESPUES LLAMAMOS AL CALLBACK, TAMBIEN PUEDEN SER FUNCIONES A PARTE
//LOAD ESPERA A QUE EL HTML, CSS, JS Y LOS ARCHIVOS QUE DEPENDEN DEL HTML ESTEN LISTOS
console.log("se ha cargafado html, css, js");

})

console.log(2)
//WINDOW ES TODO EL DOCUMENTO, MÁS GLOBAL AUN QUE EL HTML
//ES UN NIVEL MÁS ALTO

//EVENTO DOMCONTENTLOAD

document.addEventListener("DOMContentLoaded",function(){
//DOMCONTENTLOADED ESPERA QUE SE CARGUE UNICAMENTE EL HTML, EL RESTO NO LE IMPORTA
console.log("Se ha cargado el HTML");
})


console.log(4);

//EVENTO DE SCROLL
window.addEventListener("scroll",function(){
console.log("Scrolling...")
})


//VAMOS A VER COMO APLICAR LOS EVENTOS A MIS ELEMENTOS DEL HTML
//HASTA AHORA LO HEMOS HECHO AL WINDOW Y DOCUMENT

//EVENTO DE CLICK
const botonNotificacion = document.querySelector("#boton"); //HEMOS SELECCIONADO YA EL ELEMENTO

botonNotificacion.addEventListener("click",function(evento){ 
console.log(evento);//ME MUESTRA INFORMACIÓN DEL EVENTO
evento.preventDefault();// PARA EVITAR QUE EN LOS FORMULARIOS ME RECARGUE LA PÁGINA SOLA
//SUELE USAR EN FORMULARIOS

console.log("Mostrando Notificación...");
})

//EJERCICIO. CREAR UN FORMULARIO DE CONTACTO EN HTML CON
//NOMBRE
//CORREO
//MENSAJE
//BOTON ENVIAR



//EVENTOS CON EL TECLADO
//EVENTOS EN LOS INPUTS Y TEXTAREA

const nombre = document.querySelector("#Nombre");

//EVENTO CHANGE

nombre.addEventListener("change", function(){ // ESTE EVENTO SE EJECUTA CUANDO SALIMOS
    console.log("Se ha completado el nombre");
})

//EVENTO INPUT

nombre.addEventListener("input", function(evento){ // ESTE EVENTO ES A TIEMPO REAL
    // console.log("Escribiendo nombre con input...");
    // console.log(evento)
    //console.log(evento.target.value); //ME MUESTRA POR PANTALLA EN EL DATA LA INFORMACIÓN
    // EN UN INPUT LA INFORMACIÓN SE ALMACENA EN EL VALUE
    resultadoNombre = evento.target.value;
    actualizarTexto();
    leertexto(evento)
})

//EVENTOS DE SUBMIT

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Enviando Formulario...")
})

//SUBMIT PARA FORMULARIOS, ESTÁ ASOCIADO AL FORMULARIO EN GENERAL
//CLICK PARA OTROS BOTONES



// EJERCICIO
// CREAR EL EVENTO DE INPUT EN CORREO Y MENSAJE
// DEBAJO DEL FORMULARIO: CREAR UN ELEMENTO TIPO PARRAFO QUE DIGA, ESTA ES LA WEB DE NOMBRE...CORREO... Y SU PROPUESTA ES:...

let correo = document.querySelector("#Correo");

correo.addEventListener("change", function(evento){
console.log("Se ha completado el correo");
// console.log(evento);
// console.log(evento.target.value);
resultadoCorreo =evento.target.value;
actualizarTexto();
leertexto(evento)
})

let mensaje = document.querySelector ("#Mensaje")

mensaje.addEventListener("change", function(evento){
    console.log("Se ha completado el mensaje")
    // console.log(evento)
    resultadoMensaje = (evento.target.value);
    actualizarTexto();
    leertexto(evento)
})

let resultadoNombre,
    resultadoCorreo,
    resultadoMensaje;


function actualizarTexto (){
document.querySelector (".parrafo").textContent = `Esta  es la web de ${resultadoNombre} con correo ${resultadoCorreo} y su propuesta es ${resultadoMensaje}`
}

// EJERCICIO
// CREAR UN OBJETO DATOS, CON PROPIEDADES
// NOMBRE
// EMAIL
// MENSAJE

// E IR ALMACENANDO LOS RESULTADOS DEL FORMULARIO

let datos ={
    Nombre: "",
    Correo: "",
    Mensaje: "",
}

function leertexto(evento){
    datos[evento.target.id] = evento.target.value; 
    //IMPORTANTE QUE SE LLAME EL ID COMO LA PROPIEDAD DEL OBJETO
    console.log(datos); 
}

/*

COMO ORGANIZAR EL CODIGO DE JAVASCRIPT

PRIMERO VARIABLES

DESPUES EVENTOS

POR ULTIMO FUNCIONES



*/