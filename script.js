const botaoDeConverter = document.querySelector(".botaodeconverter");
const valorAConverter = document.querySelector(".valor-a-converter");
const valorConvertido = document.querySelector(".valor-convertido");
const selecaoDaMoeda = document.querySelector(".selecao-da-moeda");

function converterValor() {
  const valorDigitado = document.querySelector(".converter-botao").value;

  const dolarDoDia = 5.81;
  const euroDoDia = 6.13;

  if (selecaoDaMoeda.value == "dolar") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorDigitado / dolarDoDia);
  }

  if (selecaoDaMoeda.value == "euro") {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDigitado / euroDoDia);
  }

  valorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorDigitado);
}

botaoDeConverter.addEventListener("click", converterValor);
