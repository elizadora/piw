// criação do array
const produtos = [
    {nome: "Camiseta", preco: 50},
    {nome: "Calça", preco: 100},
    {nome: "Tênis", preco: 200}
];

// geração do novo array que vai receber os dados modficiados pela função addDesconto
const produtosAtualizado = produtos.map(addDesconto);

// função que retorna os antigos valores do array mais o novo atributo precoComDesconto
// precoComDesconto recebe o preco do produto e multiplica por 0.9
// ou seja o preço do produto com 10% de desconto
function addDesconto(value){
    return {
        ...value,
        precoComDesconto: value.preco * 0.9
    };
}

// imprime o novo array no console
console.log(produtosAtualizado);