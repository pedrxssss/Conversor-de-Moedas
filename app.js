/* Javascript Conversor de moedas */
//Moedas
let valorDigitado = document.querySelector(".input");
let valorConvertido = document.querySelector(".input-receive");
let moedaSelecionada = document.getElementsByName("moedaEstrangeira");

//Botoes
let btnLimpar = document.querySelector(".btnLimpar");

//Instrucao
let instrucao = document.querySelector(".paragrafo");
let btnChangeName = document.querySelector(".changeButtonName");

//Selecao de moedas
let moedaEstrageira = "";
let moedaConvertida = "";

//API de conversão
let url = "https://economia.awesomeapi.com.br/json/last/";
let coins = "BRL-USD,BRL-GBP,BRL-EUR,BTC-BRL";

//Conversão do valor de real para o escolhido usando a API
btnLimpar.addEventListener("click", function () {
  valorDigitado.focus();
  valorDigitado.value = "";
  valorConvertido.value = "";
  moedaSelecionada[0].checked = true;
  moedaSelecionada[1].checked = false;
  moedaSelecionada[2].checked = false;
  moedaSelecionada[3].checked = false;
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

function changeName() {
  for (let i = 0; i < moedaSelecionada.length; i++) {
    if (moedaSelecionada[i].checked) {
      btnChangeName.textContent = moedaSelecionada[i].value;
    }
  }
}

/* Mensagem de instrucao na tela */
function mensagemFormatada(moedaConvertida) {
  valorConvertido.value = `${moedaConvertida}`;
  valorConvertido.style.color = "black";
  instrucao.textContent = "Valor convertido";

  if (valorDigitado.value == "") {
    valorConvertido.value = "";
    instrucao.textContent = "Converta o valor";
  }
}
