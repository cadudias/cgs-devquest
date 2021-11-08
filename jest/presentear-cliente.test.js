const darPresentePorCompraDeValorAlto = require('./presentear-cliente')

it('deve adicionar um objeto presente caso o valor do pedido seja superior a 1000 reais', () => {
    const pedido = {
        estado: '',
        itens: [
            { nome: 'Espada mágica', valor: 3000 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const presente = {
        nome: 'Você ganhou um presente, um cupom no valor de 100 reais!',
        valor: 100
    }

    darPresentePorCompraDeValorAlto(pedido)

    expect(pedido.itens).toContainEqual(presente)
})