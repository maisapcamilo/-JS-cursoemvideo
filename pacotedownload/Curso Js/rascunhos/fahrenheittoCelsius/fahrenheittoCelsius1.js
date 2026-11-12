let res = document.getElementById('res')

function converter() {
    
    let temp = document.getElementById('temp')
    let Tf = Number(temp.value)
    let Tc = 0
    if (temp.value.length == 0) {
        window.alert('Digite a temperatura!')
    } else {
        Tc = 5*(Tf - 32)/9
    }
    res.innerHTML = `${temp.value}°F é igual a ${Tc.toFixed(2)} °C`
}