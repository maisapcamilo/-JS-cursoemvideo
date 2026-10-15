let res = document.getElementById('res')
let cel = document.getElementById('celsius')
res.innerHTML = ` <p><strong>Conversor de Temperaturas</strong></p>

        Sabemos que por motivos históricos diferentes países adotam
        escalas diferentes para medir a temperatura. Essa arbitrariedade 
        poderia gerar alguns desconfortos para pessoas utilizando um certo  
        serviço, como por exemplo um software de monitoramento de hardware, 
        o qual precisa informar a temperatura do computador para pessoas em 
        diferentes partes do mundo. Abaixo temos um conversor de temperatura 
        em Fahrenheit (°F) para escala Celsius (°C) <p></p>`

        function converter() {
            cel.innerHTML = ''
            let temp = document.getElementById('temp')
            let Tf = Number(temp.value)
            let Tc = 0
            if (temp.value.length == 0) {
                window.alert('Digite a temperatura!')
            } else {
                
                Tc = 5*(Tf - 32)/9
                }
                
                cel.innerHTML += `<p><strong>${temp.value} °F é igual a ${Tc.toFixed(2)} °C.</strong></p>`

            
        }