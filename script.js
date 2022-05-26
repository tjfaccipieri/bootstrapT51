let nomecad = document.querySelector('#nomecad')
let endereco = document.querySelector('#endereco')
let card = document.querySelector('#card')
let cvc = document.querySelector('#cvc')

function validarNome() {
  let regexName = /^[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+(?:\s[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+)+$/

  if (nomecad.value.match(regexName)) {
    nomecad.style.border = '2px solid green'
  } else {
    nomecad.style.border = '2px solid red'
  }
}

function enderecoValido() {
  if (endereco.value.length > 5) {
    endereco.style.border = '2px solid green'
  } else {
    endereco.style.border = '2px solid red'
  }
}

function validarCartao() {
  let regexCard = /(^5[1-5]|^4|^3[47])|(^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5])))\d+/
  if (card.value.match(regexCard)){
    card.style.border = '2px solid green'
  } else {
    card.style.border = '2px solid red'
  }
}

function validarCvc() {
  if (cvc.value.length == 3){
    cvc.style.border = '2px solid green'
  } else {
    cvc.style.border = '2px solid red'
  }
}

function topo() {
  window.scroll(0,0)
}