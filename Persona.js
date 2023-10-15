export class Persona {
    #nombre;

    constructor(nombre = "def nombre") {
        this.#nombre = nombre;
    }

    darComida(animal) {
        if (animal.tieneHambre()) {
            console.log("Aca esta la comida")
            animal.alimentarseCon();
        } else {
            console.log("Guardo la comida")
        }
    }
}