import axios from "axios";
let valorDigitado = document.querySelector(".input-valor-convertido");
let moedaSelecionada = document.getElementsByName("moedaEstrangeira");
let valorConvertido = document.querySelector(".input");

let moedaEstrageira = "";
let moedaConvertida = "";

valorDigitado.addEventListener("keyup", newDigiting);
async function newDigiting() {
  //API de conversão
  const url = "https://economia.awesomeapi.com.br/json/last/";
  const coins = "USD-BRL,GBP-BRL,EUR-BRL,JPY-BRL";

  try {
    const urlCoins = await axios.get(url + coins);
    const moedas = urlCoins.data;

    let dolarReal = parseFloat(moedas.USDBRL["bid"]);
    let euroReal = parseFloat(moedas.EURBRL["bid"]);
    let libraReal = parseFloat(moedas.GBPBRL["bid"]);
    let ieneReal = parseFloat(moedas.JPYBRL["bid"]);

    let currency = parseFloat(valorDigitado.value);

    for (let i = 0; i < moedaSelecionada.length; i++) {
      if (moedaSelecionada[i].checked) {
        moedaEstrageira = moedaSelecionada[i].value;
      }
    }

    //Estrutura Switch Case
    switch (moedaEstrageira) {
      case "Dólar":
        moedaConvertida = currency * dolarReal;
        newMensagemFormatada(moedaConvertida);
        break;

      case "Euro":
        moedaConvertida = currency * euroReal;
        newMensagemFormatada(moedaConvertida);
        break;

      case "Líbra":
        moedaConvertida = currency * libraReal;
        newMensagemFormatada(moedaConvertida);
        break;

      case "Iene":
        moedaConvertida = currency * ieneReal;
        newMensagemFormatada(moedaConvertida);
        break;
    }
    isNaN(moedaConvertida) ? (moedaConvertida = 0) : "";
  } catch (erro) {
    console.log(erro);
  }
}

/* Mensagem de instrucao na tela */
function newMensagemFormatada(moedaConvertida) {
  const valorFormatado = parseFloat(moedaConvertida).toFixed(2);
  const valorFormatadoComVirgula = valorFormatado.replace(".", ",");

  valorConvertido.value = valorFormatadoComVirgula;

  if (valorDigitado.value == "") {
    valorConvertido.value = "";
  }
}
