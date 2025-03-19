let total = 0;
function adicionarAoCarrinho(nome, preco) {
    let lista = document.getElementById("carrinho-lista");
    let item = document.createElement("li");
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    lista.appendChild(item);
    
    total += preco;
    document.getElementById("total").textContent = total.toFixed(2);
}
