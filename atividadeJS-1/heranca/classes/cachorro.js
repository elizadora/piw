import Animal from "./animal.js";
export default class Cachorro extends Animal {
    constructor(nome){
        super(nome);
    }
    emitirSom() {
        console.log(`${this.nome} faz auau`);
    }

    comer() {
        console.log(`${this.nome} come ração`);
    }

}
