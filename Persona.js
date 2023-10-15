export class Persona {
    #nombre;

    constructor(nombre = "def nombre") {
        this.#nombre = nombre;
    }

    darComida(perro) {
        if (perro.tieneHambre()) {
            console.log("Aca esta la comida")
            perro.alimentarseCon();
        } else {
            console.log("Guardo la comida")
        }
    }
}