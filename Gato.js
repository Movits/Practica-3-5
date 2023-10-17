import { Animal } from "./Animal.js";

export class Gato extends Animal {
    constructor(nombre = "def nombre") {
        super(nombre, "miau miau");
    }
}