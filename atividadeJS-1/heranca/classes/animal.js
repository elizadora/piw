export default class Animal{

    constructor(nome){
        this._nome = nome;
    }
    
    emitirSom(){
        console.log(`${this._nome} faz som`);
    }

    comer(){
        console.log(`${this._nome} come algo`);
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }
}