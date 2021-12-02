/**
 * @challenge: Sintaxis y variables
 * 
 * @version: V1.0.1
 * @author: Leandro Lopez.
 * @fecha: 19/11/2021
 *
 * History:
 *  - v1.0.1 – Primera entrega
 *  - v1.0.2 – Correccion de nombre de variable.
 */

// Código de aquí en adelante

let date = parseInt(prompt("indicate your year of birth"));
let currentYear = 2021;
let age = currentYear - date;

alert("your age is: " + age);

let name = prompt ("indicate your name");
let surname = prompt ("indicate your surname")

alert(" your name and surname is: " + name + " " + surname);
console.log("your name and surmane is: " + name + surname)

let email = prompt ("indicate email");

alert("your email is: " + email)

let phoneNum= parseInt (prompt("put your phone number"))

alert("your phone number is: " + phoneNum)
console.log("your phone number is: " + phoneNum)

let num1 = 28;
let num2 = 7;

let outcome = num1 - num2;

document.write("your outcome is: ");
document.write(outcome);

console.log("your outcome is: " + outcome)