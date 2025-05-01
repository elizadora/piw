import Cachorro from './classes/cachorro.js';
import Pato from './classes/pato.js';
import Gato from './classes/gato.js';

// testando as classes e exibindo os sons no console
let cachorro = new Cachorro("Melzinha");
let pato = new Pato("Patolino");
let gato = new Gato ("Liza");


console.log("O cachorro");
cachorro.emitirSom();

console.log("O pato");
pato.emitirSom();

console.log("O gato");
gato.emitirSom();