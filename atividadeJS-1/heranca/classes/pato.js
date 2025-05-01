import Animal from './animal.js';

export default class Pato extends Animal{
    constructor(nome){
        super(nome);
    }

    emitirSom() {
        console.log(`${this.nome} faz quack quack`);
    }

    comer() {
        console.log(`${this.nome} come peixenho`);
    }

}