let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver a água')
            resolve()
        } else {
            console.log('é necessário colocar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')