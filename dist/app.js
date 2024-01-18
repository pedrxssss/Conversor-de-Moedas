/* Javascript Conversor de moedas */
//Moedas
let valorDigitado = document.querySelector(".input");
let valorConvertido = document.querySelector(".input-valor-convertido");
let moedaSelecionada = document.getElementsByName("moedaEstrangeira");

let lista = document.querySelector('.lista')

//Botoes
let btnLimpar = document.querySelector(".btn-limpar");
let btnMoedas = document.querySelector('.btn-moedas')
let body = document.querySelector('body')

//Instrucao
let instrucao = document.querySelector(".instrucoes");

//Selecao de moedas
let moedaEstrageira = "";
let moedaConvertida = "";

//API de conversão
let url = "https://economia.awesomeapi.com.br/json/last/";
let coins = "BRL-USD,BRL-GBP,BRL-EUR,BTC-BRL,BRL-JPY";

//Conversão do valor de real para o escolhido usando a API
btnLimpar.addEventListener("click", function () {
  valorDigitado.focus();
  valorDigitado.value = "";
  valorConvertido.value = "";
  moedaSelecionada[0].checked = true;
  moedaSelecionada[1].checked = false;
  moedaSelecionada[2].checked = false;
  moedaSelecionada[3].checked = false;
  moedaSelecionada[4].checked = false;
});

function digiting() {
  fetch(url + coins)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let realDolar = parseFloat(data.BRLUSD["bid"]);
      let realEuro = parseFloat(data.BRLEUR["bid"]);
      let realLibra = parseFloat(data.BRLGBP["bid"]);
      let realBtc = parseFloat(data.BTCBRL["bid"]);
      let realIene = parseFloat(data.BRLJPY["bid"]);

      real = parseFloat(valorDigitado.value);

      for (let i = 0; i < moedaSelecionada.length; i++) {
        if (moedaSelecionada[i].checked) {
          moedaEstrageira = moedaSelecionada[i].value;
          console.log(moedaEstrageira);
        }
      }

      //Estrutura Switch Case
      switch (moedaEstrageira) {
        case "Dólar":
          moedaConvertida = real * realDolar;
          mensagemFormatada(
            moedaConvertida.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          );
          break;

        case "Euro":
          moedaConvertida = real * realEuro;
          mensagemFormatada(
            moedaConvertida.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })
          );
          break;

        case "Líbra":
          moedaConvertida = real * realLibra;
          mensagemFormatada(
            moedaConvertida.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })
          );
          break;

        case "Iene":
          moedaConvertida = real * realIene;
          mensagemFormatada(
            moedaConvertida.toLocaleString("ja-JP", {
              style: "currency",
              currency: "JPY",
            })
          );
          break;

        case "Bitcoin":
          moedaConvertida = real / realBtc;
          mensagemFormatada(parseFloat(moedaConvertida).toFixed(5));
          break;

        default:
          instrucao.textContent = "Escolha uma moeda.";
      }
      isNaN(moedaConvertida) ? (moedaConvertida = 0) : "";
    });
}

/* Trocar nome */
function changeName() {
  for (let i = 0; i < moedaSelecionada.length; i++) {
    if (moedaSelecionada[i].checked) {
      btnMoedas.textContent = moedaSelecionada[i].value;
    }
  }
}

/* Dropdown */
function dropdown() {
  lista.classList.toggle('hidden')
}

/* Mensagem de instrucao na tela */
function mensagemFormatada(moedaConvertida) {
  valorConvertido.value = `${moedaConvertida}`;

  if (valorDigitado.value == "") {
    valorConvertido.value = "";
  }
}
