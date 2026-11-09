
function calcular() {
    let nu = document.getElementById('num')
    let R = Number(nu.value)
    let res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    res.innerHTML = ''
    if (nu.value.length == 0 || nu.value == 0) {
        window.alert('Digite um valor válido!')
    } else {
        var area = Math.PI*R**2
        var comp = 2*Math.PI*R
        var rol = comp/20
        img.setAttribute('src', 'mudas1.png')
        res.style.textAlign = 'center'
        res.appendChild(img)
        res.innerHTML += `<p>ÁREA DO CANTEIRO: ${area.toFixed(2)} m²</p>`
        res.innerHTML += `<p>COMPRIMENTO DO CANTEIRO: ${comp.toFixed(2)} m</p>`
        res.innerHTML += `<p>ROLOS DE ARAME (20m): ${rol.toFixed(0)}</p>`
    }
}