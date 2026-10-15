let idade = document.getElementById('ida')
let res = document.getElementById('res')

function simular() {
    if (ida.value.length == 0) {
        window.alert('Por favor digite uma idade válida!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let fcob = document.getElementsByName('radcob')
        let id  = Number(idade.value)
        if (fsex[0].checked && fcob[0].checked) {
            if (id < 18) {
                res.innerHTML =  '<p>Não oferecemos seguros a menores de idade!</p>'
            } else if (id <= 24) {
                 res.innerHTML = '<p>Seu seguro sairá por R$ 535,00</p>'
            } else if (id <= 55) {
                res.innerHTML = '<p>Seu  seguro sairá por R$ 500,00</p>'
            } else {
                res.innerHTML = '<p>Seu seguro sairá por R$545,00</p>'
            }    

        } else if (fsex[0].checked && fcob[1].checked) {
            
            if (id < 18) {
                res.innerHTML =  '<p>Não oferecemos seguros a menores de idade!</p>'
            } else if (id <= 24) {
                 res.innerHTML = '<p>Seu seguro sairá por R$ 856,00</p>'
            } else if (id <= 55) {
                res.innerHTML = '<p>Seu  seguro sairá por R$ 800</p>'
            } else {
                res.innerHTML = '<p>Seu seguro sairá por R$ 872,00</p>'
            }   

        } else if (fsex[1].checked && fcob[0].checked) {
            if (id < 18) {
                res.innerHTML =  '<p>Não oferecemos seguros a menores de idade!</p>'
            } else if (id <= 24) {
                 res.innerHTML = '<p>Seu seguro sairá por R$ 475,00 </p>'
            } else if (id <= 55) {
                res.innerHTML = '<p>Seu  seguro sairá por R$ 475,00</p>'
            } else {
                res.innerHTML = '<p>Seu seguro sairá por R$ 545,00</p>'
            }   
        } else  {
            if (id < 18) {
                res.innerHTML =  '<p>Não oferecemos seguros a menores de idade!</p>'
            } else if (id <= 24) {
                 res.innerHTML = '<p>Seu seguro sairá por R$ 760,00 </p>'
            } else if (id <= 55) {
                res.innerHTML = '<p>Seu  seguro sairá por R$ 760,00 </p>'
            } else {
                res.innerHTML = '<p>Seu seguro sairá por R$ 872,00 </p>'
            }   
        }
    }
    
}