var Nymeria = {
    nombre: "Nymeria",
    edad: 10,
    caracter: "arisca",
    color: "negro",
    raza: "mestiza"
}

var Shaka ={
    nombre: "Shaka",
    edad: 12,
    caracter: "alegre",
    color: "blanco",
    raza: "mestiza"
}

//Clases para agilizar el proceso (plantillas)

class gato {
    nombre = "";
    edad = 0;
    caracter = "";
    color = "";
    raza = "";

    constructor(nombre, edad, caracter, color, raza){
        this.nombre = nombre;
        this.edad = edad;
        this.caracter = caracter;
        this.color = color;
        this.raza = raza;
    }

    maullar(){
        console.log("miau");
    }
    dormir(){
        console.log("zzzz");
    }
    ronronear(){
        console.log("Prrrr");
    }
    arañar(){
        console.log("scratch, scratch");
    }
}

//Para empezar a crear o instanciar objetos

var donGato = new gato("Don Gato", 40, "amigable", "amarillo", "eléctrico");
var Felix = new gato("Felix", 10, "misterioso", "negro", "caricaturesco");

var Bigotes = new gato("Bigotes", 3, "tímido", "marrón", "eléctrico");
var Chicharron = new gato("Chicharrón", 2, "arisco", "marrón clarito", "egipcio");
var bolaDeEstambre = new gato("Bola de Estambre", 7, "amigable", "blaco", "mestiza");
var Misifus = new gato("Misifus", 5, "intrigante", "negro", "desconocida");
var Satanas = new gato("Satanás", 90, "cariñoso", "blaco y negro", "emisario del caos");

console.log(donGato);
console.log(Felix);
console.log(Bigotes);
console.log(Chicharron);
console.log(bolaDeEstambre);
console.log(Misifus);
console.log(Satanas);

console.log("******************************************");

var Jirafa ={
    nombre: "Giga",
    edad: 2,
    caracter: "Chido"
}

var JirafaJSON = {
    "nombre": "Giga",
    "edad": 1,
    "caracter": "Chido"
}

console.log(typeof(Jirafa));
console.log(typeof(JirafaJSON));

//JSON.stringfy: de objeto a string para que el servidor lo lea
const JirafaSerializada = JSON.stringify(Jirafa);
console.log("El tipo de variable de JirafaSerializada es: ", typeof(JirafaSerializada), " y se lee así: ", JirafaSerializada);

//JSON.parse(): para convertir un string a objeto JSON
const JirafaDeserealizada = JSON.parse(JirafaSerializada);
console.log("El tipo de variable de JirafaDeserealizada es: ", typeof(JirafaDeserealizada), " y se lee así: ", JirafaDeserealizada);

