let res = document.getElementById('res')
let ladA = document.getElementById('a')
let ladB = document.getElementById('b')
let ladC = document.getElementById('c')

function verificar() {
    if (ladA.value.length == 0 || ladB.value.length == 0 || ladC.value.length == 0) {
        window.alert('Estão faltando dados!')
    } else if (ladA.value < 1 || ladB.value < 1 || ladC.value < 1) {
        window.alert('Dados inválidos!')
    } else {
        let A = Number(ladA.value)
        let B = Number(ladB.value)
        let C = Number(ladC.value)
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')
        if (A < B + C && B < A + C && C < A + B) {
            if (A == B && B == C) {
                res.innerHTML = `<p>O triângulo ABC com os lados ${A}, ${B} e ${C} é <strong>equilátero</strong>!</p>`
                img.setAttribute('src', 'equilatero.png')
            } else if (A == B || A == C || B == C) {
                res.innerHTML = `<p>O triângulo ABC com os lados ${A}, ${B} e ${C} é <strong>isóceles</strong>!</p>`
                img.setAttribute('src', 'isoceles.png')
            } else if (A != B && B != C && A != C) {
                res.innerHTML = `<p>O triângulo ABC com os lados ${A}, ${B} e ${C} é <strong>escaleno</strong>!</p>`
                img.setAttribute('src', 'escaleno.png')
            }
        } else {
            res.innerHTML = `Não é possível formar um triângulo com os lados ${A}, ${B} e ${C}!`
        }
        res.appendChild(img)
      
    }
}