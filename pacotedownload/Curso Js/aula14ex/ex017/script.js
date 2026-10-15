function calcular() {
    var num = window.document.getElementById('txtn1')
    var n1 = Number(num.value)
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Digite um número mané!')
    } else {
        let c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}