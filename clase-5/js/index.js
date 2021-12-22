// const persona = {
//     nombre: "Leandro",
//     age: 21,
//     street: "71 N° 1966"
// }
// console.log(persona)

//Formas de obtener los valores de un objeto:
// 1- Haciendo uso de la notacion de puntos. 
// 2 - Haciendo uso de los corchetes.
// 3- Arbol

// const producto ={
//     nombre : 'fideos',
//     categoria : 'pastas',
//     precio : 40.99,
//     cantidad_Por: '100 gramos',
//     nutrientes : {
//         carbs : '25g',
//         grasas :{
//             ácidos_Grasos_Saturados:'0.4 g',	
//             ácidos_Grasos_Trans: '0 g',
//         },
//         colesterol : '29g',
//         calorias: '138',
//         potasio : '38mg',
//         proteinas :{
//             vitamina_C:	'0 mg',
//             calcio:	'12 mg',
//             hierro:	'1.5 mg',
//             vitamina_D: '4 IU',
//             vitamina_B6: '0 mg',	
//             vitamina_B12: '0.1 µg',
//             magnesio: '21 mg',
//         }
//     },
//     prueba: function () {return 'probando'} //Funcion anonima
// }
// console.log(producto);
//asignar valores a una propiedad
// producto.nutrientes.grasas.ácidos_Grasos_Trans = '4 g';
// console.log(producto.nutrientes.grasas);

//Valores en variables
// const name = 'Leandro';
// const age = 21;
// const dni = 43015846;
// const date = {
//     name: name,
//     age: age,
//     dni: dni,
// }
// console.log(date)
//Valores en variable - Abreviado
// const name_2 = 'Leandro';
// const age_2 = 21;
// const dni_2 = 43015846;
// const phone_2 = 2216682772;
// const date_2 = {
//     name_2,
//     age_2,
//     dni_2,
//     phone_2,
// }
// console.log(date_2)
//================= Objetos Constructores ===============
/**
 *  El constructor de un objeto es una función que usamos
 *  para crea un nuevo objeto cada vez que sea necesario
 */

// function persona(name, age, street){
//     this.name = name;
//     this.age = age;
//     this.street = street;
// }

// let gisela = new persona ("Gisela", 32, "71 N° 1966");
// let marcelo = new persona ("Marcelo", 57, "39 N° 1327");

// console.log(gisela);
// console.log(marcelo);

// function auto (marca, modelo, motor) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.motor = motor;
    
// }

// let auto_1 = new auto ('Fiat', 147, gisela);
// let auto_2 = new auto ('Fiat', 128, marcelo);
// console.log(auto_1);
// console.log(auto_2);

// const persona = (name, age, street) =>{
//     this.name = name;
//     this.age = age;
//     this.street = street;
// }

// const persona1 = new persona ("Leandro", 21, "71 N° 1966")
// const persona2 = new persona ("Nicolas", 23, "39 N° 1327")
// const persona3 = new persona ("Matias", 24, "39 N° 1327")


//======================================================================
// Operador in y for...in
/**
 *  Operador in devuelve true si la propiedad especificada existe en el objeto.
 *  Bucle for...in permite acceder a todas las propiedades del objeto.
 */

// const persona_1 = {
//     nombre: 'Leandro',
//     calle: 71,
//     localidad:'La Plata',
// }
// Va a devolver true por que la clave "calle" esta dentro del objeto persona
// console.log('calle' in persona_1);
//La clave "edad" no existe dentro del objeto persona por lo tanto va a devolver false.
// console.log('edad' in persona_1);
//con el ciclo for...in recorremos las propiedades del objeto.
// for(const propiedad in persona_1){
//     console.log(persona_1[propiedad]);
// }

// CLASS

// Declaracion de la clase
// class obj {
    //Métodos
//     tacho(){
//         return 'tirar al tacho';
//     }
// }

// const papel = new obj();
// console.log(papel)
// papel.tacho(); //"tirar al tacho"

/**
 * Crear una clase libro
 * La clase libro tendrá: título,autor, año y género.
 * Crear un metodo que devuelva toda la informacion del libro.
 *  Haciendo uso de prompt, pedir los datos del libro.
 * Validar que los campos que se piden no son vacios.
 * Validar que el año tenga 4 digitos.
 * Validar que el género sea: aventura, terror o ficcion.
 * Crear un metodo que muestre la cantidad de años del libro.
 *  - Hacer use de : new Date() .getFullYear();
 * mostrar la informacion del libro web:
 *  - Hacer uso de: document.getElementById().innerHTML=
 */

class Book{
    constuctor(titulo, autor, año, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }

    getBookInfo(){
        return this.titulo + "Tiene como autor"+ this.autor 
                + "fue publicado el"+ this.año; 
    }

    getYears(){
        let currentDate = new Date().getFullYear();
        let calc = currentDate - this.año;
        return calc;
    }
}

let titulo = prompt('titulo');
let autor = prompt ('autor');
let año = prompt ('año');
let genero = prompt('genero');

let book = new Book (titulo, autor, año, genero);
console.log(book.autor);
console.log(book.getBookInfo());
console.log(book.getYears());

document.getElementById("title").innerHTML= book.titulo;
document.getElementById("author").innerHTML= book.autor;
document.getElementById("year").innerHTML= book.año;
document.getElementById("gender").innerHTML= book.genero;


//=================================================================================
/**
 * actividades practicas
 */

//-------------- ACTIVIDAD 1 --------------//

// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
    
//     esPropietario(nombre){
//         return this.propietario == nombre;
//     }

//     estaAbierto(hora){
//         if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
//             return true;
//         }
//         return false;
//     }
// }
// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacen");
// const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel","Panaderia");
// const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns","Shopping");
// console.log(tienda1);
// console.log(tienda2);
// console.log(tienda3);
// //-------------- ACTIVIDAD 2 --------------//
// let ingresados = '';
// for (let index = 0; index < 5; index++) {
//     let tienda =  new Tienda(prompt("NOMBRE"), 
//                              prompt("DIRECCION"), 
//                              prompt("PROPIETARIO"),
//                              prompt("RUBRO"));

//     ingresados+= "Tienda: "+tienda.nombre+" "+
//              "Direccion: "+tienda.direccion+" "+
//              "Propitario: "+tienda.propietario+" "+
//              "rubro: "+tienda.rubro+"\n";
// }
// alert(ingresados);

// //-------------- ACTIVIDAD 3 --------------//
// const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
// for (let index = 0; index < 3 ; index++) {
//     let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
//     if(tienda4.estaAbierto(entrada)){
//         alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
//     }else{
//         alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
//     }
// }
// //-------------- ACTIVIDAD 4 --------------//
// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
// const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
// const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");
// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
//     if (tienda1.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
//     }
//     if (tienda2.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
//     }
//     if (tienda3.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
//     }
// }
// //-------------- ACTIVIDAD 5 --------------//
// class Cliente{
//     constructor(nombre,presupuesto,tarjeta,telefono){
//         this.nombre = nombre;
//         this.presupuesto = parseFloat(presupuesto);
//         this.tarjeta = tarjeta;
//         this.telefono = telefono;
//     }

//     transferirDinero(valor){
//         if((this.presupuesto > 0)&&(valor < this.presupuesto)){
//             this.presupuesto -= valor;
//             console.log(this.presupuesto);
//             return valor
//         }else{
//             return 0;
//         }
//     }
// }
// const cliente1 = new Cliente("Homero", 2000, true, "1234560");
// const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
// const cliente3 = new Cliente("Barny", "50", false, "231234560");
// for (let index = 0; index < 5; index++) {
//     let entrada = parseFloat(prompt("INGRESAR MONTO"));
//     if (cliente1.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
//     if (cliente2.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
//     if (cliente3.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
//}