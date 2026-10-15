let numb = []
function adicionar() {
    var nu = window.document.getElementById('num')
    var n1 = Number(num.value)
    
    let tab = document.getElementById('list')
    let ver = numb.indexOf(n1)
    if(nu.value.length == 0 || nu.value < 1 || nu.value > 100) {
        window.alert('Digite um valor válido!')
    } else if (ver != -1) {
        window.alert('Valor já esta na lista')
    } else {
        numb.push(n1)
        
        let item = document.createElement('option')
        item.text += `Número ${n1} adicionado`
        tab.appendChild(item)
        
    }
}

function analisar() {
    numb.sort()
    var res = window.document.getElementById('res')
    let soma = 0
    let maior = numb[0]
    let menor = numb[0]
    
    for (let pos = 0; pos < numb.length; pos++) {
        if (numb[pos] > maior) {
            maior = numb[pos]
        }
        if (numb[pos] < menor) {
            menor = numb[pos]
        }
        soma += numb[pos]
    }
    res.innerHTML = numb
    res.innerHTML += `<p>Ao todo temos ${numb.length} valores.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma entre os valores é ${soma}.</p>`
    let media = soma/numb.length
    res.innerHTML += `<p>A média entre os valores é ${media}</p>`

}
