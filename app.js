/* Javascript Conversor de moedas */
//Moedas
let valorDigitado = document.querySelector(".input");
let moedaSelecionada = document.getElementsByName("moedaEstrangeira");

//Botoes
let btnConverter = document.querySelector(".btnConverter");
let btnLimpar = document.querySelector(".btnLimpar");

//Instrucao
let instrucao = document.querySelector(".paragrafo");

//Cotacoes ( Dia 30/10/2023 )
let dolar = 5.04;
let euro = 5.35;
let libra = 6.13;
let bitcoin = 172762.04;
let real = 0

//Selecao de moedas
let moedaEstrageira = "";
let moedaConvertida = "";

/* Conversão da moeda */
btnConverter.addEventListener("click", function () {
  real = parseFloat(valorDigitado.value);

  for (let i = 0; i < moedaSelecionada.length; i++) {
    if (moedaSelecionada[i].checked) {
      moedaEstrageira = moedaSelecionada[i].value;
      console.log(moedaEstrageira);
    }
  }

  //Estrutura Switch Case
  switch (moedaEstrageira) {
    case 'Dólar':
      moedaConvertida = real / dolar
      mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
      break

    case 'Euro':
      moedaConvertida = real / euro
      mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
      break

    case 'Líbra':
      moedaConvertida = real / libra
      mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
      break

    case 'Bitcoin':
      moedaConvertida = real / bitcoin
      mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
      break

    default:
      instrucao.textContent = 'Escolha uma moeda.'
  } isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
});

btnLimpar.addEventListener('click', function () {
  valorDigitado.focus()
  valorDigitado.value = ''
  instrucao.textContent = 'Digite o valor, escolha a moeda e converta'
  moedaSelecionada[0].checked = false
  moedaSelecionada[1].checked = false
  moedaSelecionada[2].checked = false
  moedaSelecionada[3].checked = false
})

/* Mensagem de instrucao na tela */
function mensagemFormatada(moedaConvertida) {
  console.log(real)
  instrucao.textContent = `O valor ${real.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} convertido em ${moedaEstrageira} é ${moedaConvertida}`
}

/* Verificador de valor digitado */
//Bloquear botao
function bloquearBotao() {
  if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
    btnConverter.setAttribute('disabled', 'disabled')
    btnConverter.style.background = '#ccc'
    btnConverter.style.cursor = 'not-allowed'
  }
}

//Ativar o botao
function ativarBotao() {
  if (valorDigitado.value > 0) {
    btnConverter.removeAttribute('disabled')
    btnConverter.style.cursor = 'pointer'
  }
}