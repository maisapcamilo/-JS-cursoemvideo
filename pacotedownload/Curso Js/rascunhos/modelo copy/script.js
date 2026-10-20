let ladA = document.getElementById('a')
let ladB = document.getElementById('b')
let ladC = document.getElementById('c')
let res = document.getElementById('res')

function verificar() {
    if (ladA.value.length == 0 || ladB.value.length == 0 || ladC.value.length == 0) {
        window.alert('Estão faltando dados')
    } else if (ladA.value < 1 || ladB.value < 1 || ladC.value < 1) {
        window.alert('Dados inválidos')
    } else {
        let A = Number(ladA.value)
        let B = Number(ladB.value)
        let C = Number(ladC.value)
        if (A < B + C && B < A + C && C < A + B) {
            if (A == B && A == C) {
                res.innerHTML = `<p>O triângulo de lados ${A}, ${B} e ${C} é <strong>equilátero</strong>!</p>`
            } else if (A == B || B == C || C == A) {
                res.innerHTML = `<p>O triângulo de lados ${A}, ${B} e ${C} é <strong>isóceles</strong>!</p>`
            } else {
                res.innerHTML = `<p>O triângulo de lados ${A}, ${B} e ${C} é <strong>escaleno</strong>!</p>`
            }

        } else {
            res.innerHTML = `<p>Não é possível formar um triângulo com lados ${A}, ${B} e ${C}</p>`
        }
    }
}