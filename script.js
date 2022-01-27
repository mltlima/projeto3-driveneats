const itemsPedidos = {
    pratoPrincipal: null,
    pratoPrincipalPreco: 0,
    bebida: null,
    bebidaPreco: 0,
    sobremesa: null,
    sobremesaPreco: 0,

    valorTotal: 0,

    nome: '',
    endereco: '',
}


function selecionarPratoPrincipal(pratoPedido) {
    
    if(itemsPedidos.pratoPrincipal !=  null){
        itemsPedidos.pratoPrincipal.classList.remove("item-selecionado");
        itemsPedidos.pratoPrincipal.querySelector("ion-icon").classList.add("escondido");
    }

    pratoPedido.querySelector("ion-icon").classList.remove("escondido");
    pratoPedido.classList.add("item-selecionado")
    itemsPedidos.pratoPrincipal = pratoPedido;

}

function selecionarBebida(bebida){

    if(itemsPedidos.bebida !=  null){
        itemsPedidos.bebida.classList.remove("item-selecionado");
        itemsPedidos.bebida.querySelector("ion-icon").classList.add("escondido");
    }
 
    bebida.querySelector("ion-icon").classList.remove("escondido");
    bebida.classList.add("item-selecionado")
    itemsPedidos.bebida = bebida;
}

function selecionarSobremesa(sobremesa) {

    if(itemsPedidos.sobremesa !=  null){
        itemsPedidos.sobremesa.classList.remove("item-selecionado");
        itemsPedidos.sobremesa.querySelector("ion-icon").classList.add("escondido");
    }
    
    sobremesa.querySelector("ion-icon").classList.remove("escondido");
    sobremesa.classList.add("item-selecionado")
    itemsPedidos.sobremesa = sobremesa;
}