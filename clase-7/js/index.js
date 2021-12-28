//=================== Storage o Almacenamiento ===================
/**
 * =======================================================================================
 *  El Storage (API de almacenamiento web) nos permite almacenar datos de manera local
 *  sin necesidad de una conexion con el servidor.
 *  - Hay dos tipos de almacenamiento: 
 *      - localStorage.
 *      - sessionStorage.
 *  Uno es indefinido en el navegadro y el otro es temporal, hasta cerrar pestaña.
 * ========================================================================================
 */

/**
 * ================ Cookies VS Storage =================
 * ||       Cookies         ||         Storage        ||
 * ||=======================||========================||
 * || ° Puede ocupar hasta  || °Puede ocupar entre 5  || 
 * ||  4kb de espacio.      ||  y 10 mb.              ||
 * ||=======================||========================||
 * ||° Son enviadas al      ||° La informacion NO es  ||
 * ||  sevidor en cada      ||  enviada al servidor en||
 * ||  peticion.            ||  cada peticion.        ||
 * ||=======================||========================||
 * || ° Tienen caducidad.   || ° No tienen caducidad. ||
 * ||=================================================||
 */

//================== localStorage: setitem ==================
/**
 * ======================================================================
 * ||Los datos almacenados en localStorage (variable global preexistente)||
 * || se almacena en el navegador de forma indefinida.                   ||
 * || - Para alamacenar informacion se utiliza "setitem"                 ||
 * ======================================================================
 */
//================================================
// Método --> localStorage.setItem(clave, valor)||
// Clave = nombre para identificar el elemento. ||
// Valor = valor/contenido del elemneto.        ||
//===============================================

// localStorage.setItem('hola', 'Bienvenido');
// localStorage.setItem('esValido', true);
// localStorage.setItem('number', 14);

//=============================================================

//===================== getItem ==========================
/**
 * =================================================
 * || para obtener la infomacion guardada en un   ||
 * || localStorage utilizamos (.getItem).         ||
 * || las claves y valores de Storage se guardan  ||
 * || en formato cadena de caracteres (DOMString).||
 * =================================================
 */

// let welcome = localStorage.getItem('hola');
// let notificacion = localStorage.getItem('Es valido');
// let number = localStorage.getItem('number');

// console.log(typeof welcome); //String
// console.log(typeof notificacion); //String
// console.log(typeof number); //String

//Ejemplo de uso de localStorage

//icicializar un valor //(clave, valor)

// localStorage.setItem('nombre', 'Leandro');
// localStorage.setItem("apellido","Lopez");
// localStorage.setItem('number',25);
// localStorage.setItem('nacionalidad','Argentina');

//Recuperar valor

// console.log(localStorage.getItem('apellido'));

//Verificar tipo de dato almacenado

// console.log(typeof name);

//obtener valor desde una funcion

// let nombre_1 = () => {
//     return localStorage.getItem('nacionalidad');
// }

// let result = nombre_1();
// console.log(result);

//Cambiar el valor de una funcion

// const editResult = () => {
//     localStorage.setItem('nombre', 'Ariel'); //cambiar el valor ('clave', 'nuevo valor')
// }

// editResult();

// console.log(localStorage.getItem('nombre'));
//====================================================================

//======================== sessionStorage ======================

/**
 * ================================================
 * || La informacion almacenada en sessionStorage|| 
 * || (variable global preexistente) se almacena ||
 * || en el navegador hasta que el usuario cierre||
 * || la ventana.                                ||
 * ==============================================||
 */

// Métodos --> sessionStorage.setItem(clave, valor);
// Clave = nombre del elemento.
// Valor = contenido del elemento.
// sessionStorage.setItem('numeros', [10, 20, 30, 40]);
// sessionStorage.setItem('esFalso', true);
// sessionStorage.setItem('email', 'lopezlh982@gmail.com');

/**
 *=================================================
 *|| Para acceder a la informacion guardada en el  ||
 *|| sessioStorage utilizamos getItem que estas se ||
 *|| guardan en formato de caracteres.             ||
 *==================================================
 */

//  let num = sessionStorage.getItem('numeros').split(',');
//  let bol = (sessionStorage.getItem('esFalso') == ('false'));
//  let mail = sessionStorage.getItem('email');

 //Ejemplo de uso de localStorage

//icicializar un valor //(clave, valor)

// sessionStorage.setItem('marcaRopa', 'Nike sb');
// sessionStorage.setItem('marcaRopa 2', 'Vans');

//Recuperar valor

// console.log(sessionStorage.getItem('marcaRopa'));

//obtener valor desde una funcion

// let ropa = () => {
//     return sessionStorage.getItem('marcaRopa 2');
// }

// let marca = ropa();
// console.log(marca);

//Cambiar el valor de una funcion

// const editMarca = () => {
//     sessionStorage.setItem('marcaRopa 2', 'Volcom'); //cambiar el valor ('clave', 'nuevo valor')
// }

// editMarca();

// console.log(sessionStorage.getItem('marcaRopa 2'));

//Ejemplo con arreglos: sessionStorage.setItem('marcaRopa', ['DC', 'Vans', 'Nike sb']);
//Recuperar datos. console.log(sessionStorage.getItem('marcaRopa').split(','));

// sessionStorage.setItem('marcaRopa', ['DC', 'Vans', 'Nike sb']);
// console.log(sessionStorage.getItem('marcaRopa').split(','));

//====================== Acesso tipo objeto ===================
/**
 * ================================================
 * || Dado que localStorage y sessionStorage son ||
 * || objetos globales es posible crear y acceder||
 * || a las claves como si fueran propiedades.   ||
 * || Pero esto no es recomendable, porque hay   ||
 * || eventos asociados a la modificacion del    ||
 * || Storage cuando se emplea getItem o setItem ||
 * ================================================
 */

// Guarda la clave
localStorage.pruebaNum = 7;

// Leer la clave
alert(localStorage.pruebaNum);

let clave = 'toString'; // tostring metodo reservado.
localStorage[clave] = '4'; // este dato no se guarda.

//==================================================================

//================= Recorriendo el Storage =====================
/**
 * ============================================================
 * ||es posible tener los valores almacenados en localStorage||
 * ||o sessionStorage con un bucle. No podemos usar for...of ||
 * ||porque no son objetos iterables, ni for...in porque     ||
 * ||obtenemos otras propiedades del objeto que no son       ||
 * ||valores almacenados. el bucle a aemplear es con el      ||   
 * ||método key                                              ||
 * ============================================================
 */


/**
 * =============== Eliminar datos del storage ====================
 * || Podemos elimnar la infomacion almacenada haciendo uso de: ||
 * || removeItem o clear.                                       ||
 * ||    °removeItem: elimina una clave.                        ||
 * ||    °clear: borra toda  la informacion                     ||
 * ==============================================================
 */

