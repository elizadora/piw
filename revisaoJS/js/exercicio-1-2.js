// criação do array de nomes
const nomes = ['Dino', 'Baby', 'Charlote'];

// novo array que recebe os dados mapeados do nome
// a função map serve para pegar cada dado do array e passar para a função
// exemplo myFunction(value) recebe primeiro o valor Dino, depois Baby e por fim Charlote 
// ou seja percorre o array fazendo e execução de uma função para cada elemento
const nomesNovos = nomes.map(myFunction);


// função que recebe o nome e concatena ele com Silva Sauro
function myFunction(value){
    return value + ' Silva Sauro';
}


// loop para imprimir valor
for(let i = 0; i < nomesNovos.length; i++){
    console.log(nomesNovos[i]);
}