import Animal from './animal.js';

export default class Gato extends Animal{
    constructor(nome){
        super(nome)
    }

    emitirSom() {
        console.log(`${this.nome} faz miau miau`);
    }

    comer() {
        console.log(`${this.nome} come ração`);
    }

}