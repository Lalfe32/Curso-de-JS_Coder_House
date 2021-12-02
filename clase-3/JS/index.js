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

for(let turno = 1 ; turno <=15 ; turno++ ){
    let name = prompt("Ingrese su nombre y apelildo");
    let dni = parseInt (prompt ("ingrese su dni sin puntos ni comas"));
    alert("hola " + name + " su N° de turno es: " + turno)
}

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