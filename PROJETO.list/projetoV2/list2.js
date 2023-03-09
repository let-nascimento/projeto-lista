let comprar = document.getElementById("comprar");
comprar.addEventListener("click", addItem);

let finalizarCompraV = document.getElementById("finalizarCompra");
finalizarCompraV.addEventListener("click", finalizarCompra);

const valorUnico = 10;
let quantidade = 0;
let id = 0

function addItem() {
    quantidade++;
    id++;
    let item = document.getElementById("item").value;
    let output = document.getElementById("output");
    output.innerHTML += `<li class="my-2" id="itemLista${id}"><span><b>${item},</b> valor: R$10 <button class="btn btn-danger" onclick="excluirItem(${id})">Devolver</button></span></li>`;
    atualizarValor();
}

function excluirItem(indice) {
    let itemExclusao = document.getElementById(`itemLista${indice}`);
    itemExclusao.setAttribute("style", "display: none;");
    quantidade--;
    atualizarValor();
}

function atualizarValor() {
    document.getElementById("valorTotal").innerHTML = `R$ ${quantidade * valorUnico}`;
}

function finalizarCompra(){
    document.getElementById("valorTotal").innerHTML = '';
    document.getElementById("output").innerHTML = '';
    alert(`O valor total da venda foi de R$ ${quantidade * valorUnico}`);
    quantidade = 0;
}