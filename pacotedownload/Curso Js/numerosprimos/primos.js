let nam = document.getElementById('num')
let res = document.querySelector('div#res')
let valores = []

function verificar() {
    res.innerHTML = ''
    if (nam.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        
        for (let c = 1; c <= Number(nam.value); c++) {
            if (Number(nam.value)%c == 0) {
                //res.innerHTML += `${c} ` 
                valores.push(c)
                
            }
            
            

        }
        res.innerHTML += `Os números {${valores}} são os divisores de ${Number(nam.value)}.`
        if (valores.length == 2 && valores[1] == Number(nam.value)) {
            res.innerHTML += `<p>Então o número ${Number(nam.value)} é um número primo!</p>`
        }
    }
}