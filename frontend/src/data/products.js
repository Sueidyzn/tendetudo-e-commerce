export let products = [];

export async function carregarProdutos() {
    const resposta = await fetch('https://fakestoreapi.com/products');
    const dados = await resposta.json();

    products = dados.map(produto => ({
        id: produto.id,
        nome: produto.title,
        title: produto.category,
        description: produto.description,
        preco: produto.price,
        imagem: produto.image
    }));

    return products;
}