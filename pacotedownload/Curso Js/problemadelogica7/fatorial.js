
function calcular() {
    let nu = document.getElementById('num')
    let res = document.getElementById('res')
    var fat = Number(nu.value)
    if (nu.value.length == 0 || nu.value < 0) {
        window.alert('Digite um valor válido!')
    } else if (Number(nu.value) == 0) {
        res.innerHTML = `${nu.value}! = 1.`
    } else {
        res.innerHTML = ''
        res.innerHTML += `${num.value}! = `
        for (let c = 1; c < Number(nu.value); c++) {
            
            fat = fat*(Number(nu.value) - c)
            res.innerHTML += `${(Number(nu.value) + 1) - c} x `
        }
        res.innerHTML += ` 1 =  ${fat}`
    }
}