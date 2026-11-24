let peso = document.getElementById('peso')
let alt = document.getElementById('alt')
let res = document.getElementById('res')

function calcular() {
    
    if(peso.value.length == 0 || alt.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var P = Number(peso.value)
        var A = Number(alt.value)
        var imc =  P/(A*A)
        var fsex = document.getElementsByName('radsex')
        var genero = ''

        if(fsex[0].checked) {
            genero = 'Homem'
            if (imc < 20.7) {
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está ABAIXO do peso! Procure orientação médica.</p>`
            }
            if (imc >= 20.7 && imc < 26.4) {
                res.innerHTML =  `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está com peso NORMAL </p>`
            }
            if (imc >= 26.4 && imc < 27.8) {
                res.innerHTML = `<p> ${genero} com IMC = ${imc.toFixed(2)}. Você está pouco ACIMA do peso! </p>`
            }
            if (imc >= 27.8 && imc < 31.1) {
                res.innerHTML = `<p> ${genero} com IMC = ${imc.toFixed(2)}. Você está ACIMA do peso! </p>`
            }
            if (imc >= 31.1) {
                res.innerHTML = `<p> ${genero} com IMC = ${imc.toFixed(2)}. Você está OBESO! Procure orientação médica. </p>`
            }
        } else {
            genero = 'Mulher'
            if (imc < 19.1) {
                res.innerHTML = `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está ABAIXO do peso! Procure orientação médica.</p>`
            }
            if (imc >= 19.1 && imc < 25.8) {
                res.innerHTML =  `<p>${genero} com IMC = ${imc.toFixed(2)}. Você está com peso NORMAL </p>`
            }
            if (imc >= 25.8 && imc < 27.3) {
                res.innerHTML = `<p> ${genero} com IMC = ${imc.toFixed(2)}. Você está pouco ACIMA do peso! </p>`
            }
            if (imc >= 27.3 && imc < 32.3) {
                res.innerHTML = `<p> ${genero} com IMC = ${imc.toFixed(2)}. Você está ACIMA do peso! </p>`
            }
            if (imc >= 32.3) {
                res.innerHTML = `<p> ${genero} com IMC = ${imc.toFixed(2)}. Você está OBESA! Procure orientação médica. </p>`
            }
        }
    }
}