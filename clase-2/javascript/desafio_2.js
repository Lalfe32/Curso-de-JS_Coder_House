/**
 * @challenge: Control de flujos
 * 
 * @version: V1.0.2
 * @author: Leandro Lopez.
 * @fecha: 23/11/2021
 *
 * History:
 *  - v1.0.1 – Primera entrega
 *  - v1.0.2 – Correccion de nombre de variable.
 */
 
let name = prompt ("Ingrese su nombre");
let age = parseInt (prompt("Ingrese su edad"));
let num1 = parseInt (prompt("ingrese su DNI"));
let phone = parseInt(prompt("Indica tu numero de telefono"));

if(name != "" && name === "Leandro"){
    console.log("Hola Leandro")
    alert("Hola Leandro")
    if( age >= 18){
        alert("Puedes ingresar")
        console.log("Puedes ingresar")
    }else if( age <= 17 && age >= 0){
        alert("Usted es menor de edad no puede ingresar")
        console.log("Usted es menor de edad no puede ingresar")
    }
    if( age >= 18 && age <= 24){
        alert("Felicidades usted gano un cupon de 30% de descuento")
        console.log ("Felicidades usted gano un cupon de 30% de descuento")
    }else if( age >= 25){
        alert("No tienes descuento")
        console.log("No tienes descuento")
    }
    if(num1 != ""){
        alert("Su dni es: " + num1)
        console.log("El dni ingresado es: " + num1)
    }else if( num1 === ""){
        alert("Usted no igreso su dni")
        console.log("No igreso el dni")
    }
    if(phone != ""){
        alert("Tu N° de telefono es: " + phone)
        console.log("El numero ingresado es: " + phone)
    }else if( phone === ""){
        alert("No ingreso su N° de telfono")
        console.log("Numero de telefono no ingresado")
    }
}else{
    console.log("No tienes acceso")
    alert("No tienes acceso")
}

//======================================================================
/**
 * actividad practica
 */

//-------------- ACTIVIDAD 1 --------------//
let entrada = prompt("INGRESAR UN  NOMBRE");
let nombre = "BART";
if (entrada == nombre) {
    alert("FUI YO");
} else {
    alert("YO NO FUI");
}
//-------------- ACTIVIDAD 2 --------------//
let entrada2 = prompt("INGRESAR UN  TECLA");
if ((entrada2 == "y") || (entrada2 == "Y")) {
    alert("CORRECTO");
} else {
    alert("ERROR");
}
//-------------- ACTIVIDAD 3 --------------//
let entrada3 = prompt("INGRESAR UN NUMERO");
if (entrada3 == 1) {
    alert("ELEGISTE A HOMERO");
}else if (entrada3 == 2) {
    alert("ELEGISTE A MARGE");
}else if (entrada3 == 3) {
    alert("ELEGISTE A BART");
}else if (entrada3 == 4) {
    alert("ELEGISTE A LISA");
}
else {
    alert("ERROR");
}
//-------------- ACTIVIDAD 4 --------------//
let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 1000)) {
    alert("PRESUPUESTO BAJO");
} else if ((entrada4 >= 1001) && (entrada4 <= 3000)) {
    alert("PRESUPUESTO MEDIO");
} else if (entrada4 > 3000) {
    alert("PRESUPUESTO ALTO");
}
else {
    alert("ERROR");
}
//-------------- ACTIVIDAD 5 --------------//
let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    console.log(heladera);
} else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}