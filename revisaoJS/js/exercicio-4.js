// criação do array
const vendas = [
    { produto: "Notebook", preco: 2500, quantidade: 2 },
    { produto: "Smartphone", preco: 1500, quantidade: 3 },
    { produto: "Teclado", preco: 200, quantidade: 5 },
];

// a função reduce é utilizada para reduzir um array para um único valor através do processamento dos seus elementos
// nesse caso, ela vai somar o preço de cada produto multiplicado pela quantidade
// o primeiro parêmetro é o acumulador
// o segundo parêmetro é o valor atual do array
// o terceiro parêmetro é o valor inicial do acumulador
// nesse caso, o valor inicial é 0
const totalVendas = vendas.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);

// imprime o total das vendas no console
console.log("O total das vendas foi: " + totalVendas);