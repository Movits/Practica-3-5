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
    
    esHambriento() {
        return this.#hambre;
    }
    
    tieneHambre() {
        let estadoAnteriorHambre = this.#hambre;
    
        if (this.#hambreValor <= 30) {
            this.#hambre = true;
            if (!estadoAnteriorHambre) console.log(`${this.#sonido}, humano quiero comida`);
        } else if (this.#hambreValor > 30 && this.#hambreValor < 60) {
            this.#hambre = false;
            if (estadoAnteriorHambre) console.log(`${this.#sonido}, en un rato tengo hambre`);
        } else {
            this.#hambre = false;
            if (estadoAnteriorHambre || this.#hambreValor == 60) console.log(`${this.#sonido}, estoy lleno`);
        }
    }

    alimentarseCon() {
        this.#hambreValor += 50;
        console.log(`${this.#nombre} ahora tiene un valor de hambre de ${this.#hambreValor}`);
    }

}