function carregar() {
    var msg = window.document.getElementById('txmsg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var data1 = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora} horas e ${min} minutos.</strong>`
    if (hora < 6) {
        //boa madrugada
    } else if (hora >= 6 && hora <12) {
        msg.innerHTML += '<p>BOM DIA!</p>'
        img.src = 'manha.png'
        document.body.style.background = '#7f9e5c'
    } else if (hora < 18) {
        msg.innerHTML += '<p>BOA TARDE!</p>'
        img.src = 'tarde.png'
        document.body.style.background = '#9d462e'//'#edc190'
    } else {
        msg.innerHTML += '<p>BOA NOITE!</p>'
        img.src = 'noite.png'
        document.body.style.background = '#0e1b26'
    }
}
