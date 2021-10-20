document
.querySelectorAll('.item-toggle')
.forEach(item => {
    item.addEventListener('click', () => {
        esconderElemento(item)
    })
})

function esconderElemento(item) {
    const estaEscondido = item.classList.contains('esconder')

    estaEscondido
        ? item.classList.remove('esconder')
        : item.classList.add('esconder')
}