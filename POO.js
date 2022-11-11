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
    dormir();
    ronronear();
    arañar();
}

//Para empezar a crear o instanciar objetos

var donGato = new gato("Don Gato", 40, "amigable", "amarillo", "eléctrico");
var Felix = new gato("Felix", 10, "misterioso", "negro", "caricaturesco");

var Bigotes = new gato("Bigotes", 3, "tímido", "marrón", "eléctrico");
var Chicharron = new gato("Chicharrón", 2, "arisco", "marrón clarito", "egipcio");
var bolaDeEstambre = new gato("Bola de Estambre", 7, "amigable", "blaco", "mestiza");
var Misifus = new gato("Misifus", 5, "intrigante", "negro", "desconocida");
var Satanas = new gato("Satanás", 90, "cariñoso", "blaco y negro", "emisario del caos");