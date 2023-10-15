export class Animal {
    #nombre;
    #hambre;
    #hambreValor;

    constructor(nombre = "def nombre"){
        this.#nombre = nombre;
        this.#hambreValor = this.getRandomInt(100)
        this.tieneHambre();

        setInterval(() => {
            this.#hambreValor--;
            console.log(this.#hambreValor);
        }, 1000);
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    tieneHambre() {

        if (this.#hambreValor <= 30) {
            console.log("au au, humano quiero comida");
            this.#hambre = true;

        } else if (this.#hambreValor > 30 && this.#hambreValor < 60) {
            console.log("au au, en un rato tengo hambre");
            this.#hambre = false;

        } else {
            console.log("au au, estoy lleno");
            this.#hambre = false;
        }
        return this.#hambre;
    }

    alimentarseCon() {
        this.#hambreValor += 50;
    }
}