function contar() {
    var ini = window.document.getElementById('inic')
    var fin = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var i = Number(ini.value)
    var p = Number(pas.value)
    var f = Number(fin.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Dados incompletos recarregue e tente novamente!'
    } else if (ini.value == fin.value || pas.value == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (ini.value > fin.value){
        res.innerHTML = ''
        for (var c =  i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += '\u{1F3C1}'
    } else {
        res.innerHTML = ''
        for (c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += '\u{1F3C1}'
    }
   
}