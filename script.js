const itemsPedidos = {
    pratoPrincipal: null,
    pratoPrincipalPreco: 0,
    bebida: null,
    bebidaPreco: 0,
    sobremesa: null,
    sobremesaPreco: 0,

    valorTotal: 0,

    nome: null,
    endereco: null,
}


function selecionarPratoPrincipal(pratoPedido) {
    
    if(itemsPedidos.pratoPrincipal !=  null){
        itemsPedidos.pratoPrincipal.classList.remove("item-selecionado");
        itemsPedidos.pratoPrincipal.querySelector("ion-icon").classList.add("escondido");
    }

    pratoPedido.querySelector("ion-icon").classList.remove("escondido");
    pratoPedido.classList.add("item-selecionado")
    itemsPedidos.pratoPrincipal = pratoPedido;
    const preco = parseFloat(pratoPedido.querySelector("h3").innerHTML.split(' ')[1]);
    itemsPedidos.pratoPrincipalPreco = preco;
    verificaPedido()
}

function selecionarBebida(bebida){

    if(itemsPedidos.bebida !=  null){
        itemsPedidos.bebida.classList.remove("item-selecionado");
        itemsPedidos.bebida.querySelector("ion-icon").classList.add("escondido");
    }
 
    bebida.querySelector("ion-icon").classList.remove("escondido");
    bebida.classList.add("item-selecionado")
    itemsPedidos.bebida = bebida;
    const preco = parseFloat(bebida.querySelector("h3").innerHTML.split(' ')[1]);
    itemsPedidos.bebidaPreco = preco;
    verificaPedido()
}

function selecionarSobremesa(sobremesa) {

    if(itemsPedidos.sobremesa !=  null){
        itemsPedidos.sobremesa.classList.remove("item-selecionado");
        itemsPedidos.sobremesa.querySelector("ion-icon").classList.add("escondido");
    }
    
    sobremesa.querySelector("ion-icon").classList.remove("escondido");
    sobremesa.classList.add("item-selecionado")
    itemsPedidos.sobremesa = sobremesa;
    const preco = parseFloat(sobremesa.querySelector("h3").innerHTML.split(' ')[1]);
    itemsPedidos.sobremesaPreco = preco;
    verificaPedido()
}

//Funcao que verefica se os tres items foram pedidos
function verificaPedido() {

    const confirmar = document.querySelector("footer button")
    if (itemsPedidos.pratoPrincipal != null && itemsPedidos.bebida != null && itemsPedidos.sobremesa != null) {
        //alert(itemsPedidos.valorTotal.toFixed(2));
        itemsPedidos.valorTotal = itemsPedidos.bebidaPreco + itemsPedidos.pratoPrincipalPreco + itemsPedidos.sobremesaPreco;
        confirmar.classList.add("botao-confirmar");
        confirmar.innerHTML = "Fechar Pedido";
        confirmar.disabled = false;
    }
}

function fecharPedido() {
    
    let uri =   `Olá, gostaria de fazer o pedido:
                - Prato: ${itemsPedidos.pratoPrincipal.querySelector("h1").innerHTML}
                - Bebida: ${itemsPedidos.bebida.querySelector("h1").innerHTML}
                - Sobremesa: ${itemsPedidos.sobremesa.querySelector("h1").innerHTML}
                Total: R$${itemsPedidos.valorTotal}`
    
    let encoded = encodeURIComponent(uri);
    window.open(`https://wa.me/553131313131?text=${encoded}`);
    //alert(uri);
}

function adicionarDados() {

    itemsPedidos.pratoPrincipalPreco
}

function confirmaPedido() {

}