// criação do array
const livros = [
    { titulo: "JavaScript para Iniciantes", autor: "João Silva", disponivel: true },
    { titulo: "CSS Avançado", autor: "Maria Oliveira", disponivel: false },
    { titulo: "React Rápido", autor: "Ana Souza", disponivel: true },
];

// a função filter é utilizada para filtrar os elementos de um array com base em uma condição
// nesse caso, ela vai filtrar os livros que estão disponíveis
const livrosAtualizados = livros.filter(livro => livro.disponivel === true);

// imprime os livros disponíveis no console
console.log(livrosAtualizados);