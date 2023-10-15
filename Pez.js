import { Animal } from "./Animal.js";

export class Pez extends Animal {
    constructor(nombre = "def nombre") {
        super(nombre, "blub blub");
    }
}