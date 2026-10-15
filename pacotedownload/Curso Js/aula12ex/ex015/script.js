function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('nasc')
    var res = window.document.getElementById('res')
    if(nasc.value.length == 0 || nasc.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //nesse caso temos dois elementos com mesmo nome por isso 'elements' no plural
        var idade = ano - nasc.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked && idade > 17) {
            gênero = 'Homem'
            if (idade < 61) {
                //foto homem
                img.setAttribute('src', 'homem.png')
            } else {
                //foto senhor
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[0].checked) {
            gênero = 'menino'
            if (idade < 5) {
                //foto bebemenino
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 13){
                //foto menino
                img.setAttribute('src', 'menino.png')
            } else {
                //foto adolescentem
                img.setAttribute('src', 'adolescentem.png')
            }
        } else if (fsex[1].checked && idade > 17) {
            gênero = 'Mulher'
            if (idade < 61) {
                //foto mulher
                img.setAttribute('src', 'mulher.png')
            } else {
                //foto senhora
                img.setAttribute('src', 'senhora.png')
            }
        } else {
            gênero = 'menina'
            if (idade < 5) {
                //bebe menina
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 13) {
                //foto menina
                img.setAttribute('src', 'menina.png')
            } else {
                //foto adolescentef
                img.setAttribute('src', 'adolescentef.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos um(a) ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }

    
    /*if (idade < 5) { Era o que eu tinha feito antes da resolução
        img.src = 'bebemenina.png'

    } else if (idade < 13) {
        img.src = 'menino.png'

    } else if (idade < 18) {
        img.src = 'adolescentef.png'

    } else if (idade < 60) {
        img.src = 'homem.png'

    } else {
        img.src = 'senhora.png'

    }
    */ 
}