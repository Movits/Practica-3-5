import { Animal } from "./Animal.js";

export class Perro extends Animal {
    constructor(nombre = "def nombre") {
        super(nombre, "au au");
    }
}