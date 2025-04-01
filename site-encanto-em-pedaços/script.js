let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    let quantidade = event.target.previousElementSibling.value;
    carrinho.push({ nome, preco, quantidade });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";
    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.nome} - ${item.quantidade}x - R$ ${item.preco * item.quantidade}`;
        lista.appendChild(li);
    });
}

function enviarPedido() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá, quero fazer um pedido:\n";
    carrinho.forEach(item => {
        mensagem += `${item.quantidade}x ${item.nome} - R$ ${item.preco * item.quantidade}\n`;
    });

    let numero = "5567996494996"; // Substitua pelo seu número no formato internacional (ex: 5581987654321)
    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
