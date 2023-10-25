
/*
!!!!!!!!!!!!!
REPASO ULTIMO DÍA


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


EJERCICIO 1
función que invierta una cadena.
F: INVERTIR
P: CADENA
*/

function invertir(cadena) {
    let cadenaInvertida = ""
    for (let i=cadena.length-1; i>=0; i--){
        console.log(cadenaInvertida=cadena[i]);
    }
    }
    
    invertir("Melisa Fernandez");

/*
EJERCICIO 2
función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2
*/

function concatenar (cadena1, cadena2){
    console.log(cadena1,cadena2);
}

concatenar("hola","como estas?")

/*
EJERCICIO 3
función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA
*/

function contiene(cadena,letra){
    console.log(cadena.includes(letra))
}

contiene("Melisa","a")

/*
EJERCICIO 4
función que encuentre el número más grande en un array.
F: MAXNUM
P: ARRAY
*/

let valorArray = [1,5,3,9]

function maxNum(array){
    return Math.max(...array)
}

console.log("El valor máximo en el array es:", maxNum(valorArray));

/*
EJERCICIO 5
función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY
*/

function minNum(array){
    return Math.min(...array)
}

console.log("El valor máximo en el array es:", minNum(valorArray));



/*
EJERCICIO 6
función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR
*/

let elementos = [ 1, 5, "a"]
console.log("Longitud del Array Elementos:",elementos.length)

let contador=0;

function numBooleanos (array, valor){
  
    for (let i = 0; i < array.length-1; i++) {
      if (array[i] === valor) {
        contador++;
      }
    }

  }

  numBooleanos(elementos, true);
  console.log(contador)


/*
EJERCICIO 7
función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY
*/

// function arrayNumeros2 (array){
//     for (let i=0; i<array.length; i++){
//         if (typeof array[i] === "number"){
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log("¿TODOS LOS ELEMENTOS SON NUMEROS?",arrayNumeros2(elementos));


let contadorNumeros = 0
function arrayNumeros (array){
    for (let i=0; i<array.length; i++){
        if (typeof array[i] === "number"){
            contadorNumeros++
        }
    } if(contadorNumeros===array.length){
        console.log("OK")
    }else{
        console.log("NO OK")
    }
}

arrayNumeros(elementos);


/*
EJERCICIO 8
función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2
*/

function numAleatorio (n1,n2){
console.log(Math.round(Math.random()*(n2-n1)+n1))
    
}

numAleatorio(3,8);


/*
EJERCICIO 9
función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA
*/

function areaTriangulo (base,altura){
    console.log(area = (base*altura/2));
    
}

areaTriangulo(6,4);

/*
EJERCICIO 10
función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS
*/

function grados (celsius){
    console.log((celsius * 9/5) + 32)
}

grados(25)


function grados2(Celsius) {
    return  (Celsius * 9/5) + 32;
  }
  
  
  let temperaturaCelsius = 25;
  let temperaturaFahrenheit = grados2(temperaturaCelsius);
  
  console.log(`${temperaturaCelsius} grados Celsius equivalen a ${temperaturaFahrenheit} grados Fahrenheit.`);

/*
EJERCICIO 11
función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS
*/

function bisiesto (dias){
    if(dias === 365){
        console.log("ES BISIESTO");
    } else if(dias === 366){
        console.log("NO ES BISIESTO");
    }else {
        console.log("ESTO NO ES UN AÑO")
    }
}

bisiesto(365);

/*
EJERCICIO 12
función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO
*/

let contadorVocales = 0

function vocales(texto){
    for(let i=0; i<=texto.length;i++){
        if(texto[i] === "a" ){
            contadorVocales++;
        } else if (texto[i] === "e"){
            contadorVocales++;
        } else if (texto[i] === "i"){
            contadorVocales++;
        } else if (texto[i] === "o"){
            contadorVocales++;
        } else if (texto[i] === "u"){
            contadorVocales++
        } 
} console.log(contadorVocales)
}

vocales("Hola ¿como estas?")


/*
EJERCICIO 13
función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO
*/

function palabras (texto){
    for(let i=0; i<=texto.length; i++){
        if(texto[i] === " "){
            contador++
        }
    } console.log(contador+1)
}

palabras("buenos dias para la persona mas linda del mundo")

/*
EJERCICIO 14
función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY
*/

let elementos1 = [1,2,1,true,false, true,2,4]
let arraySinDuplicados = [];

function eliminaDuplicados(array){
for (let i=0; i<array.length; i++){
        if (arraySinDuplicados.includes(array[i]) === false) {
          arraySinDuplicados.push(array[i]);
        }
      } console.log(arraySinDuplicados);
    }

eliminaDuplicados(elementos1);

// function eliminaDuplicados(array){
//     for (let i=array.length-1; i>=0; i--){
//             if (arraySinDuplicados.includes(array[i]) === false) {
//               arraySinDuplicados.pop(array[i]);
//             }
//           } console.log(arraySinDuplicados);
//         }
    
//     eliminaDuplicados(elementos1);


/*
EJERCICIO 15
función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY
*/

// let arrayNumeros = [2,5,76,7,1,8]

// function ordenarArray (array){
//     for (let i=0; i<=array.length; i++){
//         console.log(array.sort[i]);
//     }
// }

// ordenarArray(arrayNumeros);


/*
EJERCICIO 16
función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO
*/

function tablaMultiplicar (numero){
    for (let i = 1; i <= 10; i++) {
        console.log(numero * i);
      }
}

tablaMultiplicar(30);

/*
EJERCICIO 17
función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES
*/

// function nombreMes (numMes){

// }

// nombreMes("marzo")

/*
EJRCICIO 18
función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA
*/


/*
EJERCICIO 19
función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2
*/