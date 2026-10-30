let nu = document.getElementById('num')
let res = document.getElementById('res')
let valores = []

function verificar() {
    res.innerHTML = ''
    valores = []
    if (nu.value.length == 0) {
        window.alert('Digite um número!')
    }else {
        for (let c = 1; c <= Number(nu.value); c++){
            if (Number(nu.value)%c == 0) {
                valores.push(c)
            }
        }
        res.innerHTML = `<p>Os valores {${valores}} são os divisores de ${Number(nu.value)}.</p>`
        if (valores.length == 2){
            res.innerHTML += `<p>Então o número ${Number(nu.value)} é primo!</p>`
        }

    }
}