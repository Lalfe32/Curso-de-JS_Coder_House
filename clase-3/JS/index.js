/**
 * @challenge: Creando un algoritmo utilizando un ciclo
 * 
 * @version: V1.0.2
 * @author: Leandro Lopez.
 * @fecha: 23/11/2021
 *
 * History:
 */

//==================================== Ciclo por conteo =============================================

//============================ Estructura FOR ==============================

// for(let turno = 1 ; turno <=15 ; turno++ ){
//     let name = prompt("Ingrese su nombre y apelildo");
//     let dni = parseInt (prompt ("ingrese su dni sin puntos ni comas"));
//     alert("hola " + name + " su N° de turno es: " + turno)
// }

//=========================================================================

//====================== Estructura FOR con sentencia Break y Continue ======================

//============================== Con Break ===================================
// let entradas= parseInt(prompt("cuantas operaciones va a realizar"))
// let entradasPlatea = 400
// let entradasGeneral = 800
// let tipoEntradas;
// let cantCompradas;

// for(let operacion = 0; operacion < entradas; operacion++){
//     tipoEntradas = prompt ("Que entrada quiere: Platea o General?")
//     if(tipoEntradas !== "Platea" && tipoEntradas !== "General"){
//         break;
//     }
//     cantCompradas = parseInt (prompt("Intruduzca el monto: "))
//     if(tipoEntradas === "Platea"){
//         entradasPlatea = entradasPlatea - cantCompradas;
//         alert("Usted compro " + cantCompradas + " de entradas")
//     }
//     if(tipoEntradas === "General"){
//         entradasGeneral = entradasGeneral - cantCompradas
//         alert("Usted compro " + cantCompradas + " de entradas")
        
//     }
// }
// alert("Tu compra se hizo con exito")

//================================ Con Continue =========================

// let monto = 0
// let tramite;

// for(let saldo = 100; saldo <= 100; saldo++){
//     tramite = prompt("tu saldo es: " + saldo + ",queres " + "recargar" + " o pasar saldo")


//     if(tramite === "recargar"){
//         monto = parseInt (prompt("cuanto queres recargar"))
//         monto = monto + saldo;
//         alert("tu saldo ahora es: " + monto);
//     }else{
//         alert("para pasar saldo se necesita un minimo de $150");
//         continue
//     }
// }

// alert("gracias por usar nuestro servicio")

//============================ Estructura WHILE ==============================

while(true){
    totalBike = parseInt (prompt("Intoduce un numero (6 para salir): "));
    if(totalBike === 6) break;
    if(totalBike % 2 === 0){
    document.write('<img src="descarga.png">')
    }else{
        document.write('<img src="mountain.png">')
    }
}

//======================================================================================
/**
 * actividades practicas
 */

//-------------- ACTIVIDAD 1 --------------//
let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
}
//-------------- ACTIVIDAD 2 --------------//
let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        break;
    }
    alert("lado");
}
//-------------- ACTIVIDAD 3 --------------//
let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos);
//-------------- ACTIVIDAD 4 --------------//
let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);
//-------------- ACTIVIDAD 5 --------------//
let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
let ingresados = '';
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
}