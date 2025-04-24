 // item 1
 console.log("Atividade 1");
 // criação do array com 30 posições
 const arrayTeste = new Array(30);

 // loop para percorrer o array usando o tamanho dele como condição de parada
 // para cada posição do array será somanda a posição mais 23 e depois sera imprimida
 for(let i = 0; i < arrayTeste.length; i++){
     // array[0] = 0 + 23;
     // arary[1] = 1 + 23;
     //...
     // array[29] = 29 + 23;
     arrayTeste[i] = i + 23;
     console.log(arrayTeste[i]);
 }
