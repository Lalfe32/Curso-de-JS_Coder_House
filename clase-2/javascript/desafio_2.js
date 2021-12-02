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
