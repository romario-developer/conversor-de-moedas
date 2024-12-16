const botaoDeConverter = document.querySelector(".botaodeconverter");
const valorAConverter = document.querySelector(".valor-a-converter");
const valorConvertido = document.querySelector(".valor-convertido");
const selecaoDaMoeda = document.querySelector(".selecao-da-moeda");

async function converterValor() {
  const valorDigitado = document.querySelector(".converter-botao").value;

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());
  const dolar = data.USDBRL.high;
  const euro = data.EURBRL.high;
  const btc = data.BTCBRL.high;
  


  if (selecaoDaMoeda.value == "dolar") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorDigitado / dolar);
  }

  if (selecaoDaMoeda.value == "euro") {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDigitado / euro);
  }

  if (selecaoDaMoeda.value == "libra") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valorDigitado / libra);
  }

  if (selecaoDaMoeda.value == "bitcoin") {
    valorConvertido.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
    }).format(valorDigitado / btc);
  }

  valorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorDigitado);
}

function mudarDeMoeda() {
  const nomeDaMoeda = document.querySelector(".nomedamoeda");
  const imagemDaMoeda = document.querySelector(".imagem-da-moeda");

  if (selecaoDaMoeda.value == "dolar") {
    nomeDaMoeda.innerHTML = "Dólar Americano";
    imagemDaMoeda.src = "./assets/dolar.png";
  }

  if (selecaoDaMoeda.value == "euro") {
    nomeDaMoeda.innerHTML = "Euro";
    imagemDaMoeda.src = "./assets/euro.png";
  }
  if (selecaoDaMoeda.value == "libra") {
    nomeDaMoeda.innerHTML = "Libra";
    imagemDaMoeda.src = "./assets/libra.png";
  }
  if (selecaoDaMoeda.value == "bitcoin") {
    nomeDaMoeda.innerHTML = "Bitcoin";
    imagemDaMoeda.src = "./assets/bitcoin.png";
  }

  converterValor();
}
selecaoDaMoeda.addEventListener("change", mudarDeMoeda);
botaoDeConverter.addEventListener("click", converterValor);
