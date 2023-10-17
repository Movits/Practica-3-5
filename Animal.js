export class Animal {
    #nombre;
    #hambre;
    #hambreValor;
    #sonido;

    constructor(nombre = "def nombre", sonido = "def sonido"){
        this.#nombre = nombre;
        this.#hambreValor = this.getRandomInt(100)
        this.#sonido = sonido;
        this.actualizarEstadoHambre();

        setInterval(() => {
            this.#hambreValor--;
            this.actualizarEstadoHambre();
        }, 1000);
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    esHambriento() {
        return this.#hambre;
    }
    
    actualizarEstadoHambre() {
        let estadoAnteriorHambre = this.#hambre;
        this.#hambre = this.#hambreValor <= 30;

        if (this.#hambre && !estadoAnteriorHambre) {
            console.log(`${this.#sonido}, humano quiero comida`);
        } else if (this.#hambreValor > 30 && this.#hambreValor < 60 && estadoAnteriorHambre) {
            console.log(`${this.#sonido}, en un rato tengo hambre`);
        } else if ((this.#hambreValor >= 60 && this.#hambreValor <= 100) && estadoAnteriorHambre) {
            console.log(`${this.#sonido}, estoy lleno`);
        }
    }

    alimentarseCon() {
        let alimentacion = this.getRandomInt(21) + 30;
        this.#hambreValor = Math.min(this.#hambreValor + alimentacion, 100);
        console.log(`${this.#nombre} ahora tiene un valor de hambre de ${this.#hambreValor}`);
    }
    
}
