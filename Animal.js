export class Animal {
    #nombre;
    #hambre;
    #hambreValor;
    #sonido;

    constructor(nombre = "def nombre", sonido = "def sonido"){
        this.#nombre = nombre;
        this.#hambreValor = this.getRandomInt(100)
        this.#sonido = sonido;
        this.tieneHambre();

        setInterval(() => {
            this.#hambreValor--;
            this.tieneHambre();
        }, 1000);
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    tieneHambre() {

        if (this.#hambreValor <= 30) {
            console.log(`${this.#sonido}, humano quiero comida`);
            this.#hambre = true;
            return this.#hambre;

        } else if (this.#hambreValor > 30 && this.#hambreValor < 60) {
            console.log(`${this.#sonido}, en un rato tengo hambre`);
            this.#hambre = false;
            return this.#hambre;

        } else {
            console.log(`${this.#sonido}, estoy lleno`);
            this.#hambre = false;
            return this.#hambre;
        }
    }

    alimentarseCon() {
        this.#hambreValor += 50;
    }
}