function contar() {
    var ini = window.document.getElementById('inic')
    var fin = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var i = Number(ini.value)
    var p = Number(pas.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Dados incompletos recarregue e tente novamente!'
    } else if (ini.value == fin.value || pas.value == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (ini.value > fin.value){
        res.innerHTML = ''
        while (i >= fin.value) {
        res.innerHTML += `${i} - `
        i -= p
          
        }
    } else {
        res.innerHTML = ''
        while (i <= fin.value) {
            res.innerHTML += `${i} - `
            i += p
        }

    }
   
}