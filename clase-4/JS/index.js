
//====================== Funciones sin parametros ========================

// Funciones: una función es un conjunto de instrucciones que se agrupan para realizar una tarea. Se escriben igual. Deben tener un nombre en minúsculas y sin espacios. El contenido de la función debe escribirse dentro de las llaves. no se puede repetir en otra.



// function name(){
//     prompt("ingrese su nombre");
//     alert("hola bienvenido!"); 
// }
// name();
// name();
// name();
// name();

// function dni(){
//   parseInt (prompt("ingrese su dni"));
// }

// dni();
// dni();
// dni();
// dni();

//========================================================================

//======================== Funciones con parametros ==============================

// Son aqeullas que se les asigna uno a mas valores, para ser empleadas en sus operaciones, esos son los parametros de la funcion.

// let resultado = 0;

// function date (num1, num2){
//     resultado = num1 - num2;
// }

// function mostrar(mensaje){
//     alert(mensaje);
// }
//  date(18, 45);
//  mostrar(resultado);

//==============================================================================

//========================= Funciones con parametros: Return ======================

/**
 * Las funciones pueden generar un valor de retorno llamado RETURN obteniendo asi el valor de la funcion al ser llamada.
 * @param {number} num1 : primer numero a multiplicar
 * @param {number} num2  : segundo numero a multiplicar
 * @returns 
 */

//  function multiplicar (num1, num2){
//      return  num1 + num2;
//  }

//  let resultado = multiplicar (5, 8);
//=================================================================================
/**
 * 
 * @param {number} x : primer numero a sumar 
 * @param {number} y : segundo numero a sumar
 */
//  function sumar (x,y){
//      let total = x + y;
//      alert (total);
//  }

//  sumar(25,40);
//  sumar(38,4);
//  sumar(45,86);

//================================================================================
//============== funcion con menos parametros ===============

// let a = 10;
// let b
// function dividir(x,y=2) { //se le puede agregar un valor por defecto (y=2)
//     let total = x / y;
//     alert(total)
// }

// dividir(a)
//===============================================================================
//================ ¿cuales son los valores de x e y? ==================
//=====================================================================
// let x = 6;
// let y = 4;
// total_1 = x * y
// function multiplicar(x, y) {
//     x = 8;
//     y = 2;
//     total = x * y;
//     alert("el valor de x es = " + x + " el valor de y es =" + y + " dentro de la funcion");
//     alert("el total dentro de la funcion es: " + total)
// }
// multiplicar(x, y);
// alert("el valor de x es = " + x + " el valor de y es =" + y + " fuera de la funcion")
// alert("el total fuera de la funcion es: " + total_1)

// let name = "Leandro";
// let surname = "Lopez";
// total_1 = name + surname
// function date(name, surname) {
//     name = "Jose";
//     surname = "Herrera";
//     total = name + surname;
//     alert("el valor de name es = " + name + " el valor de surname es =" + surname + " dentro de la funcion");
//     alert("el total dentro de la funcion es: " + total)
// }
// date(name, surname);
// alert("el valor de name es = " + name + " el valor de surname es =" + surname + " fuera de la funcion");
// alert("el total fuera de la funcion es: " + total_1);
//==========================================================================================================
//======= Haciendo uso de return =================
// let response;
// function hello(userName) {
//     return "hola, bienvenido"+ userName;
// }
// response = hola("Leandro")
// alert(response)
//==============================================
// la siguiente funcion devuelve undefined en lugar de la multiplicacion
// solucionar el siguiente problema

// function multiply(a,b) {
//    return a * b
// }
// let response = multiply(6,5)
// console.log(response)

/**
 * EJERCICIO
 * Realizar un programa que una vez que solicita dos numeros, los pasa a una funcion donde se calcula la suma de estos. La funcion devolvera dicho resultado,  pero en el caso de que sea negativo, debe mostrar un mensaje diciendo que el resultado es negativo, en caso contrario mostrar un mensaje que diga que el resultado de positivo. 
 */

// let number_1 = parseInt (prompt("Ingrese el primer numero"));
// let number_2 = parseInt (prompt("Ingrese el segundo numero"));
// function sumar(x,y) {
//     let result = x + y;
//     return result;
// }
// let response = sumar(number_1, number_2);

// if(response >= 0){
//     alert("es positivo")
// }else{
//     alert("es negativos")
// }

//====================================================
//=== Ejemplo haciendo uso de la estructura While ====
//====================================================
// let response = 1;
// let numberOne;
// let numberTwo;
//  function sumar(x,y) {
//      let result = x + y;
//      return result; 
// }

// while(response >= 0){
//     numberOne = parseInt(prompt("ingrese el primer numero"))
//     numberTwo = parseInt (prompt("ingrese el segundo numero"))
//     response = sumar(numberOne, numberTwo)
// }
// alert ("aca termina el programa")

//==========================================================
// Scope- Local - usadas dentro de las funciones/ciclos
//              - Cualquier lugar acotado con llaves
//==========================================================
// Ejemplo de una variable local
// function reloj(){
//     let numero = 19 //variable local
//     console.log(numero) 
// }
// reloj();
// console.log(numero)

/**
 * Ejemplo 2 - ajustar la funcion manteniendo las variables
 * locales dentro de la funcion y corregie el error
 */

// function concat_characters() {
//     let a = "alan";
//     let b = "brito";
//     let c = a + b;

//     show_result(c);
// }

// function show_result(c) {
//     alert(c);
// }

// concat_characters();
// show_result();

//============================================
// Funciones Anonimas y Funciones de Flecha
//============================================
/**
 * Una funcion anonima es una funcion que se definde sin nombre y se utiliza para ser pasadas com parametros o asignada a variables
 */

//Generalmente, las funciones anonimas se asignan a variables declaradas como constantes
const 

/**
 * identificamos a las funciones de flecha como funciones anonimas de sintaxis simplificadas.
 * Estan disponibles desde la version de ES6 de JS, no usan la palabra (FUNCTION) pero usamos (=> "flecha") entre los parametros y el bloque.
 */

// const suma = (a, b) => {return a + b };
// // Si la funcion de una sola linea con retorno podemos evitar escribir el cuerpo.
// const resta =(a, b) =>  a - b;
// console.log(suma(10,40));
// console.log(resta(13,5));

/**
 * Ejemplo aplicado: calcular el precio
 */

// const suma = (a, b) => a + b;
// const resta = (a,b) => a - b;
// // SI una funcion es de una sola linea con retorno y un parametr se puued evitar escribir los ()
// const iva = x => x * 0.21;
// let precioProducto = 500;
// let precioDescuento = 60;
// // Calculo el precioProducto + IVA - precioDescuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
// console.log(nuevoPrecio)

//Funciones anonimas (sin nombre)
// funciones con nombre

// function coheteEspacial() {
//     return console.log("despegando...");
// }
// coheteEspacial();

// //Convertir a una funcion con nombre a una funcion anonima

// const coheteEspacial = function () {
//     return console.log("despegando...")
// }
// coheteEspacial();
//====================================================

// const SUMADOS = function (valor) {
//     return valor + 4 
// }
// console.log(SUMADOS(8));


//==========================================================
//funciones flecha

//Funcion por nombre
function calcPrecioTotal(precio) {
    let impuesto = 1.20;
    let envio = 20;
    let precioTotal = (precio * impuesto ) + envio;
}

//funcion por flecha
const calcPrecioTotal = precio => {
    let impuesto = 1.20;
    let envio = 20;
    let precioTotal = (precio * impuesto ) + envio;
}