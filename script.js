const botaoDeConverter = document.querySelector(".botaodeconverter");
const valorAConverter = document.querySelector(".valor-a-converter");
const valorConvertido = document.querySelector(".valor-convertido");
const selecaoDaMoeda = document.querySelector(".selecao-da-moeda");

function converterValor() {
  const valorDigitado = document.querySelector(".converter-botao").value;

  const dolarDoDia = 5.81;
  const euroDoDia = 6.13;
  const libraDoDia = 7.37;
  const bitcoinDoDia = 533.164;

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

  if (selecaoDaMoeda.value == "libra") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valorDigitado / libraDoDia);
  }

  if (selecaoDaMoeda.value == "bitcoin") {
    valorConvertido.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
    }).format(valorDigitado / bitcoinDoDia);
  }

  valorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorDigitado);
}

function mudarDeMoeda() {
  const nomeDaMoeda = document.querySelector(".nomedamoeda");
  const imagemDaMoeda = document.querySelector(".imagem-da-moeda")

  if (selecaoDaMoeda.value == "dolar"){
    nomeDaMoeda.innerHTML = "Dólar Americano";
    imagemDaMoeda.src = "./assets/dolar.png"
}

if(selecaoDaMoeda.value == "euro"){
  nomeDaMoeda.innerHTML = "Euro"
  imagemDaMoeda.src = "./assets/euro.png"
}
if(selecaoDaMoeda.value == "libra"){
  nomeDaMoeda.innerHTML = "Libra"
  imagemDaMoeda.src = "./assets/libra.png"
}
if(selecaoDaMoeda.value == "bitcoin"){
  nomeDaMoeda.innerHTML = "Bitcoin"
  imagemDaMoeda.src = "./assets/bitcoin.png"
}

converterValor()
}
selecaoDaMoeda.addEventListener("change", mudarDeMoeda);
botaoDeConverter.addEventListener("click", converterValor);

