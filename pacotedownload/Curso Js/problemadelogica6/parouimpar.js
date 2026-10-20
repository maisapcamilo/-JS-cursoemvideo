let tot = parseInt(prompt('Qual total de partidas?'))
let valores = []
let primeiro =[]
let segundo = []
let pontosA = []
let pontosB = []
let somas = []

while (valores.length < tot*2) {
    
    if (valores.length%2 == 0) {
        let num = parseInt(prompt('É a vez do primeiro jogador digite um número:'))
        valores.push(num)
        primeiro.push(num)
    } else {
        let num = parseInt(prompt('Agora é a vez do segundo jogador digite um número:'))
        valores.push(num)
        segundo.push(num)
    }
  
}
for (let c = 0 ; c < tot*2; c++) {
    
    if (c%2 == 0) {
        let soma = valores[c] + valores[c + 1]
        somas.push(soma)

        
    }
}
for (let d = 0; d < somas.length; d++) {
    if (somas[d]%2 == 0) {
        pontosA.push(somas[d])
    } else {
        pontosB.push(somas[d])
    }
}
document.write(`<p>[${somas}]</p>`)
document.write(`Primeiro jogador: [${primeiro}]`)
document.write(`<p>Segundo jogador: [${segundo}]</p>`)
document.write(`<p>[${pontosA}]</p>`)
document.write(`<p>[${pontosB}]</p>`)
if (pontosA.length > pontosB.length){
    document.write(`Primeiro jogador venceu!`)
} else if (pontosA.length == pontosB.length) {
    document.write(`Empate!`)
} else {
    document.write(`Segundo jogador venceu!`)
}