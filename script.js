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
    const preco = parseFloat(pratoPedido.querySelector("h3").innerHTML.split(' ')[1].replace(',', '.'));
    itemsPedidos.pratoPrincipalPreco = preco;
    verifica3Pedidos()
}

function selecionarBebida(bebida){

    if(itemsPedidos.bebida !=  null){
        itemsPedidos.bebida.classList.remove("item-selecionado");
        itemsPedidos.bebida.querySelector("ion-icon").classList.add("escondido");
    }
 
    bebida.querySelector("ion-icon").classList.remove("escondido");
    bebida.classList.add("item-selecionado")
    itemsPedidos.bebida = bebida;
    const preco = parseFloat(bebida.querySelector("h3").innerHTML.split(' ')[1].replace(',', '.'));
    itemsPedidos.bebidaPreco = preco;
    verifica3Pedidos()
}

function selecionarSobremesa(sobremesa) {

    if(itemsPedidos.sobremesa !=  null){
        itemsPedidos.sobremesa.classList.remove("item-selecionado");
        itemsPedidos.sobremesa.querySelector("ion-icon").classList.add("escondido");
    }
    
    sobremesa.querySelector("ion-icon").classList.remove("escondido");
    sobremesa.classList.add("item-selecionado")
    itemsPedidos.sobremesa = sobremesa;
    const preco = parseFloat(sobremesa.querySelector("h3").innerHTML.split(' ')[1].replace(',', '.'));
    itemsPedidos.sobremesaPreco = preco;
    verifica3Pedidos()
}

//Funcao que verefica se os tres items foram pedidos
function verifica3Pedidos() {

    const confirmar = document.querySelector("footer button")
    if (itemsPedidos.pratoPrincipal != null && itemsPedidos.bebida != null && itemsPedidos.sobremesa != null) {
        itemsPedidos.valorTotal = itemsPedidos.bebidaPreco + itemsPedidos.pratoPrincipalPreco + itemsPedidos.sobremesaPreco;
        confirmar.classList.add("botao-confirmar");
        confirmar.innerHTML = "Fechar Pedido";
        confirmar.disabled = false;
    }
}


//Mostra os items pedidos para confirmacao do usuario
function verificarPedido(){
    document.querySelector(".nome-prato").innerHTML = itemsPedidos.pratoPrincipal.querySelector("h1").innerHTML
    document.querySelector(".preco-prato").innerHTML = itemsPedidos.pratoPrincipalPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    document.querySelector(".nome-bebida").innerHTML = itemsPedidos.bebida.querySelector("h1").innerHTML
    document.querySelector(".preco-bebida").innerHTML = itemsPedidos.bebidaPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    document.querySelector(".nome-sobremesa").innerHTML = itemsPedidos.sobremesa.querySelector("h1").innerHTML
    document.querySelector(".preco-sobremesa").innerHTML = itemsPedidos.sobremesaPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    document.querySelector(".valor-total").innerHTML = itemsPedidos.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    document.querySelector(".confirmar-pedido").classList.remove("escondido");
    //prompt para o nome e endereço
    itemsPedidos.nome = prompt("Qual o seu nome? ");
    itemsPedidos.endereco = prompt("Qual o seu endereço? ");
}

function fecharPedido() {

    let uri =   `Olá, gostaria de fazer o pedido:
                - Prato: ${itemsPedidos.pratoPrincipal.querySelector("h1").innerHTML}
                - Bebida: ${itemsPedidos.bebida.querySelector("h1").innerHTML}
                - Sobremesa: ${itemsPedidos.sobremesa.querySelector("h1").innerHTML}
                Total: R$${itemsPedidos.valorTotal}
                
                Nome: ${itemsPedidos.nome}
                Endereço: ${itemsPedidos.endereco}`
    
    let encoded = encodeURIComponent(uri);
    window.open(`https://wa.me/553131313131?text=${encoded}`, '_blank');
}


function cancelar() {
    document.querySelector(".confirmar-pedido").classList.toggle("escondido");
}


function enviarPedido() {
    fecharPedido();
}
