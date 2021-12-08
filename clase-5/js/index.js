let name = "Leandro";
let age = 21;
let street = "71 N° 1966";
const persona = {
    nombre: "Leandro",
    age: 21,
    street: "71 N° 1966"
}

alert(persona.nombre);
alert(persona.age);
alert(persona.street);

//================= Objetos Constructores ===============

function persona(name, age, street){
    this.name = name;
    this.age = age;
    this.street = street;
}

const persona1 = new persona ("Leandro", 21, "71 N° 1966")
const persona2 = new persona ("Nicolas", 23, "39 N° 1327")
const persona3 = new persona ("Matias", 24, "39 N° 1327")