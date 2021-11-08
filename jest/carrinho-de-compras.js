const calcularValorPedido = require('./calcular-valor-pedido');
const darPresentePorCompraDeValorAlto = require('./presentear-cliente')

if(calcularValorPedido(pedido) > 1000) {
    darPresentePorCompraDeValorAlto(pedido)
}