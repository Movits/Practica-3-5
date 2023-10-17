import { Perro } from "./Perro.js";
import { Persona } from "./Persona.js";
import { Gato } from "./Gato.js";
import { Pez } from "./Pez.js";

const personas = [new Persona("Roberto")];
const animales = [new Perro("Boris"), new Gato("Flake"), new Pez("Nemo")];

class InteraccionAnimalPersona {
    constructor() {
        this.revisarYAlimentarAnimales();
        setInterval(() => this.revisarYAlimentarAnimales(), 1000);
    }

    revisarYAlimentarAnimales() {
        personas.forEach(persona => {
            animales.forEach(animal => {
                persona.darComida(animal);
            });
        });
    }
}

new InteraccionAnimalPersona();
