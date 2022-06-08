let d = e => document.querySelector(e);
var jogadas = 0
function girar() {
    let dado1 = Math.floor(Math.random() * 6 + 1)
    let dado2 = Math.floor(Math.random() * 6 + 1)
    let dado3 = Math.floor(Math.random() * 6 + 1)
    let dado4 = Math.floor(Math.random() * 6 + 1)
    let dado5 = Math.floor(Math.random() * 6 + 1)

    d('.dado1').src = `images/face${dado1}.png`

    d('.dado2').src = `images/face${dado2}.png`

    d('.dado3').src = `images/face${dado3}.png`

    d('.dado4').src = `images/face${dado4}.png`

    d('.dado5').src = `images/face${dado5}.png`
        jogadas++
        if(jogadas <= 3) {
            return d('.jog').innerHTML = `<b>Jogadas: ${jogadas}</b>` 
        }else if(jogadas===4){
            jogadas = 1
            return d('.jog').innerHTML = `<b>Jogadas: ${jogadas}</b>` 
        } 
}
function remover1() {
    d('.dado1').classList.add('d-none')
}
function remover2() {
    d('.dado2').classList.add('d-none')
}
function remover3() {
    d('.dado3').classList.add('d-none')
}
function remover4() {
    d('.dado4').classList.add('d-none')
}
function remover5() {
    d('.dado5').classList.add('d-none')
}
function reiniciar() {
    document.querySelectorAll('img').forEach(function (img) {
        img.classList.remove('d-none')
    })
}
function limpar() {
    document.querySelectorAll('.col-5').forEach(function (e) {
        e.value = ''
    })

}

function somar() {
    let v1 = d('#n11').value
    let v2 = d('#n12').value
    let v3 = d('#n13').value
    let v4 = d('#n14').value
    let v5 = d('#n15').value
    let v6 = d('#n16').value
    let v7 = d('#n1s').value
    let v8 = d('#n1f').value
    let v9 = d('#n1p').value
    let v10 = d('#n1g').value
    d('#n1t').value = parseInt(v1, 10) + parseInt(v2, 10) + parseInt(v3, 10) + parseInt(v4, 10) + parseInt(v5, 10) + parseInt(v6, 10) + parseInt(v7, 10) + parseInt(v8, 10) + parseInt(v9, 10) + parseInt(v10, 10)

    let c1 = d('#n21').value
    let c2 = d('#n22').value
    let c3 = d('#n23').value
    let c4 = d('#n24').value
    let c5 = d('#n25').value
    let c6 = d('#n26').value
    let c7 = d('#n2s').value
    let c8 = d('#n2f').value
    let c9 = d('#n2p').value
    let c10 = d('#n2g').value
    d('#n2t').value = parseInt(c1, 10) + parseInt(c2, 10) + parseInt(c3, 10) + parseInt(c4, 10) + parseInt(c5, 10) + parseInt(c6, 10) + parseInt(c7, 10) + parseInt(c8, 10) + parseInt(c9, 10) + parseInt(c10, 10)

}


d('.jogar').addEventListener('click', girar)

d('.limpar').addEventListener('click', limpar)

d('.somar').addEventListener('click', somar)



