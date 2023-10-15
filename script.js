import { Perro } from "./Perro.js";
import { Persona } from "./Persona.js";

const personas = [new Persona("Roberto")];
const perros = [new Perro("Boris")];

class Interaccion {
    constructor() {
        setInterval(() => {
            personas.forEach(persona => {
                perros.forEach(perro => {
                    persona.darComida(perro);
                });
            });
        }, 1000);
    }
}

new Interaccion();