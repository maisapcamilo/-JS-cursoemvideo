function calcular() {
    let raio = window.document.getElementById('num')
    let R = Number(raio.value)
    var res = window.document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    res.innerHTML = ''
    if (raio.value.length == 0 || raio.value == 0) {
        window.alert('Digite um valor válido!')
    } else {
        var area = Math.PI*R**2
        var comp = 2*Math.PI*R
        var rol = comp/20
        img.setAttribute('src', 'mudas.png')
        res.style.textAlign = 'center'
        res.appendChild(img)
        res.innerHTML += `<p>ÁREA DO CANTEIRO: <strong>${area.toFixed(2)} m²</strong>.</p>`
        res.innerHTML += `<p>COMPRIMENTO DO CANTEIRO: <strong>${comp.toFixed(2)} m</strong>.</p>`
        res.innerHTML += `ROLOS DE ARAME (20m): <strong>${rol.toFixed(0)}</strong>`

    }
}