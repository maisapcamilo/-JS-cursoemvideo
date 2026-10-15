let ida = document.getElementById('idade')
let res = document.getElementById('res')

function simular() {
    if (ida.value.length == 0) {
        window.alert('Digite a idade por favor!')
    } else {
        var I = Number(ida.value)
        var fsex = document.getElementsByName('radsex')
        var fcob = document.getElementsByName('radcob')
        var genero = ''
        
        if (fsex[0].checked && fcob[0].checked) {
            if (I < 18) {
                res.innerHTML = 'Não podemos oferecer seguros a menores de idade!'
            } else if (I >= 18 && I <= 24) {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 535,00.' 
            } else if (I >= 25 && I < 55) {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 500,00.'
            } else {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 545,00.'
            }
            
        } else if (fsex[0].checked && fcob[1].checked) {
            if (I < 18) {
                res.innerHTML = 'Não podemos oferecer seguros a menores de idade!'
            } else if (I >= 18 && I <= 24) {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 856,00.' 
            } else if (I >= 25 && I < 55) {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 800,00.'
            } else {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 872,00.'
            }

        } else if (fsex[1].checked && fcob[0].checked) {
            if (I < 18) {
                res.innerHTML = 'Não podemos oferecer seguros a menores de idade!'
            } else if (I >= 18 && I <= 55) {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 475,00.'
            } else {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 545,00'
            }

        } else if (fsex[1].checked && fcob[1].checked) {
            if (I < 18) {
                res.innerHTML = 'Não podemos oferecer seguros a menores de idade!'
            } else if (I >= 18 && I <= 55) {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 760,00.'
            } else {
                res.innerHTML = 'Sua apólice de seguro será no valor de R$ 872,00'
            }
        }
    }
}