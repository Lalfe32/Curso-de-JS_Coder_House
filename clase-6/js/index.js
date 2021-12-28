// ARRAYRS
/**
 * Un Arrays es un objeto que almacena un listo de elementos como:
 *  - Strings
 *  - Numbers
 *  - Bool
 *  - Objetos o hasta una lista de listas.
 */

//============== Ejemplo ===============

// const string = ['Hola', 'Bienvenido', 'Gracias!!', 'Hasta Luego'];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const bool = [true ,false];
// const objetos = ['Hola', true, 5 ['Hata Luego', 2, false]];
/**
 * Los elementos del array tiene un orden
 * y este se empieza a contar desde el 0 hasta el ultimo elemento.
 *  Es decir que si yo tengo 8 elemento este va a contar desde el 0 al 7.
 */

// console.log(numbers);
//======================================================================

//====================== Recorrer un Array ================

// const marcasSkate = ['primitive', 'DGK', 'Plan B', 'Chocolate', 'Girl','Creature'];
// const parteSkate = ['ruedas', 'rulemanes', 'trucks', 'lija', 'tabla'];
// let skateCompleto;
// let otrasPartes;

// console.log(marcasSkate);
//Podemos acceder a los elemento empleando array indicando su posicion.
// console.log(marcasSkate[3]); // En esta caso llamamos al string "Chocolate" que se undica en la posicion 3.

// Usando for para los arrays
// for (let skate of marcasSkate){
//     console.log('La marca de este skate es: ' + skate)
// }

// con forEach
// marcasSkate.forEach(skate => {
//     console.log(`Tu skate es ${skate}`)
// })
//======================================================================

//===================== Métodos comunes de un array ========================

//===================== .legth =================================
//medir la longitud de un array
// console.log('longitud', marcasSkate.length); //El .legth mide la longitud de un array
// El .legth se utiliza, por ejemplo:
// if (marcasSkate.length > 0){
    //si es es mayor a 0 hago algo
// }else{
//     //no hago nada
// }
//==============================================================

//======================== ToString ===================
/**
 * ================================================================
 *  ToString me permite convertir el array en una cadena de texto.
 * ===============================================================
 */

// console.log(marcasSkate.toString());
//=====================================================

//==================== Join ===================================================
/**
 * =====================================================================
 *  Join te perimite tambien convertir el array en una cadena de texto
 *  pero con la diferncia de que este te deja elegir cual va a ser
 *  el caracter que va a estar entre la cadena de texto.
 * ==============================================================
 */
// console.log(marcasSkate.join("-"));
//=============================================================================

//============================= Push ===================================
/**
 * ========================================
 * el método push se utiliza para agregar
 * o sumar un nuevo elemento al array.
 * este se suma al final de los elementos.
 * ========================================
 */
// marcasSkate.push = ('seven');
// unshift
/**
 * el unshift es lo mismo que el push pero
 * con la diferencia de que este lo suma al inicio de los elementos,
 * es decir a la posicion 0.
 */
// marcasSkate.unshift =('almost'); // este elemento va a estar en la posicion 0.
// console.log(marcasSkate.legth); //ahora el array tiene 5 posiciones.
//=====================================================================

//======================= Concat ======================================
/**
 *  Concat lo que me va a permitir es juntar dos arrays
 */

//  skateCompleto = marcasSkate.concat(parteSkate);
//  console.log(skateCompleto);
 //=====================================================================

 //====================== Slice ======================
 /**
  * Este devuelve una copia del array a un nuevo array
  * sin modificar el original.
  * este recibe 2 parametros:
  * - 1 El indice de donde el corte
  *  - 2 El numero de items a tomar en cuenta
  *   (si de deja vacio, se va a tomar hasta el final del array)
  *  
  */

// otrasPartes = marcasSkate.slice(1,4);
// console.log (otrasPartes);

//================================================================

//====================== Splice ==================================
/**
 * =======================================================
 * Este metodo me permite eliminar elementos del array.
 * El Splice si afecta al array original.
 * Recibe 2 parametros:
 * -- 1 -- el primer parametro indica de donde quiero arrancar.
 * -- 2 -- el segundo indica la cantidad de elementos que quiero eliminar.
 * ======================================================
 */

// marcasSkate.splice(1,2);
// console.log (marcasSkate);
//==============================================================

//===================== Arrays de objetos ============================

/**
 * Los arrays puedesn usarse par almacenar objetos personalizados.
 * Podemos asignar literales o previamente instanciados.
 */

const jugadorFutbol =[
    {nombre:'Enzo Nicolas Perez', club:'River Plate', posicion:'MC', años:35, nacionalidad:'Argentina'},
    {nombre:'Thiago Almada', club:'Velez Sarsfield', posicion:'MCO', años:20, nacionalidad:'Argentina'},
    {nombre:'Marcos Ruben', club:'Rosario Central', posicion:'DC', años:35, nacionalidad:'Argentina'},
    {nombre:'Mariano Andujar', club:'Estudiantes de La Plata', posicion:'Arquero', años:38, nacionalidad:'Argentina'},
    {nombre:'Julian Alvarez', club:'River Plate', posicion:'DC', años:21, nacionalidad:'Argentina'},
];


// class datos{
//     constructor(nombre, club, posicion, años, nacionalidad){
//         this.nombre = nombre;
//         this.club = club;
//         this.posicion = posicion;
//         this.años = años;
//         this.nacionalidad = nacionalidad;
//     };

//     busqueda(){
//         console.log(`el resultado de la busqueda es ${this.nombre} - ${this.nacionalidad}`);
//     }
// }

// const jugadorFutbol_1 = [
//     new Jugador ('Enzo Nicolas Perez', 'River Plate', 'MC', 35, 'Argentina'),
//     new Jugador ('Marcos Ruben', 'Rosario Central', 'DC', 35, 'Argentina'),
//     new Jugador ('Julian Alvarez', 'River Plate', 'DC', 21, 'Argentina')
// ]

// console.log(jugadorFutbol);

// for(const jugador of jugadorFutbol_1){
//     jugador.busqueda();
// }

//==================================================================================

//=================== FIND - ENCONTRAR UN OBJETO EN PARTICULAR ===========
/**
 * solo va a traer uno solo Objeto
 */

console.log(jugadorFutbol.find(jugador => jugadorFutbol.nombre === 'Julian Alvarez') );

//===================== Filter ====================================
/**
 * Este va a traer el array que cumpla con la condicion
 */
 console.log(jugadorFutbol.filter(jugador => jugadorFutbol.nombre === 'Julian Alvarez') );

 //================================================================

 //================ MAP ===================
 /**
  * el MAP es en método que transforma
  */