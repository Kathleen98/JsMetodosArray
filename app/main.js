let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getbuscarLivrosDaAPI()

async function getbuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}