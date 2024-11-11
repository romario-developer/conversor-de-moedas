const botaoConverter = document.querySelector(".converter")

function converterValor(){
    const valorDigitado = document.querySelector(".converter-botao").value
    const valorDaMoedaAconverter = document.querySelector(".valor-da-moeda-a-converter")
    const valorDaMoedaConvertida = document.querySelector(".valor-da-moeda-convertida")

    const valorDoDia = 5.2
    const valorConvertido = valorDigitado / valorDoDia
    console.log(valorConvertido)
}


botaoConverter.addEventListener("click", converterValor)
