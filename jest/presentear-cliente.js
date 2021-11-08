const darPresentePorCompraDeValorAlto = function(pedido) {
    const presente = {
        nome: 'Você ganhou um presente, um cupom no valor de 100 reais!',
        valor: 100
    }
    
    pedido.itens.push(presente)
}

module.exports = darPresentePorCompraDeValorAlto