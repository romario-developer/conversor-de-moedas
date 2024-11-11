const botaoConverter = document.querySelector(".converter")

function converterValor(){
    const valorDigitado = document.querySelector(".valor-da-moeda").value
    
    
    const valorDoDia = 5.2
    const valorConvertido = valorDigitado / valorDoDia
    console.log(valorConvertido)
}


botaoConverter.addEventListener("click", converterValor)
