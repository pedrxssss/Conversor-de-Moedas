/* Javascript Conversor de moedas */
//import
import axios from "axios";

//Moedas
let valorDigitado = document.querySelector(".input");
let moedaSelecionada = document.getElementsByName("moedaEstrangeira");
let valorConvertido = document.querySelector(".input-valor-convertido");

//Botoes
const btnMoedas = document.querySelector(".btn-moedas");
const btnLimpar = document.querySelector(".btn-limpar");

//Dropdown Lista
let lista = document.querySelector(".lista");

//Selecao de moedas
let moedaEstrageira = "Dólar";
let moedaConvertida = "";

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

//API
valorDigitado.addEventListener("keyup", digiting);
async function digiting() {
  //API de conversão
  const url = import.meta.env.VITE_URL;
  const coins = import.meta.env.VITE_COINS;

  try {
    const urlCoins = await axios.get(url + coins);
    const moedas = urlCoins.data;

    let realDolar = parseFloat(moedas.BRLUSD["bid"]);
    let realEuro = parseFloat(moedas.BRLEUR["bid"]);
    let realLibra = parseFloat(moedas.BRLGBP["bid"]);
    let realBtc = parseFloat(moedas.BTCBRL["bid"]);
    let realIene = parseFloat(moedas.BRLJPY["bid"]);
    let realYuan = parseFloat(moedas.BRLCNY["bid"]);

    let real = parseFloat(valorDigitado.value);

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

      case "Yuan":
        moedaConvertida = real * realYuan;
        mensagemFormatada(
          moedaConvertida.toLocaleString("zh-CN", {
            style: "currency",
            currency: "CNY",
          })
        );
        break;

      case "Bitcoin":
        moedaConvertida = real / realBtc;
        mensagemFormatada(parseFloat(moedaConvertida).toFixed(5));
        break;
    }
    isNaN(moedaConvertida) ? (moedaConvertida = 0) : "";
  } catch (erro) {
    console.log(erro);
  }
}

//event listeners
btnMoedas.addEventListener("click", dropdown);
moedaSelecionada.forEach((element) => {
  element.addEventListener("click", () => {
    changeName(), dropdown();
  });
});

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
  lista.classList.toggle("hidden");
}

/* Mensagem de instrucao na tela */
function mensagemFormatada(moedaConvertida) {
  valorConvertido.value = `${moedaConvertida}`;

  if (valorDigitado.value == "") {
    valorConvertido.value = "";
  }
}
