let peso = document.getElementById('peso')
let alt = document.getElementById('alt')
let res = document.getElementById('res')
let div = document.getElementById('divs')
divs.innerHTML = '<p>----------------</p>'
divs.innerHTML += `<p><strong>Calcule seu IMC</strong></p>`

function calcular() {
    res.innerHTML = ''
    if (peso.value.length == 0 || alt.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var P = Number(peso.value)
        var A = Number(alt.value)
        var imc = P/(A*A)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        
        if(fsex[0].checked){
            genero = 'Homem'
            if (imc < 20.7 ) 
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>ABAIXO</strong> do peso! Procure orientação médica</p>`
            if (imc >= 20.7 && imc < 26.4)
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está com peso <strong>NORMAL</strong>!</p>`
            if (imc >= 26.4 && imc < 27.8) 
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>pouco ACIMA</strong> do peso!</p>`
            if (imc >= 27.8 && imc < 31.1) 
                res.innerHTML =`<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>ACIMA </strong> do peso!</p>`
            if (imc >= 31.1)
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>OBESO</strong>! Procure orientação médica.</p>`
        } else {
            genero = 'Mulher'
            if (imc < 19.1 ) 
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>ABAIXO</strong> do peso! Procure orientação médica</p>`
            if (imc >= 19.1 && imc < 25.8)
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está com peso <strong>NORMAL</strong>!</p>`
            if (imc >= 25.8 && imc < 27.3) 
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>pouco ACIMA</strong> do peso!</p>`
            if (imc >= 27.3 && imc < 32.3) 
                res.innerHTML =`<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>ACIMA </strong> do peso!</p>`
            if (imc >= 32.3)
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está <strong>OBESA</strong>! Procure orientação médica.</p>`

        }
            
        }
        
    }



