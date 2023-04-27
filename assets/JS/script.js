var inputNumero = document.getElementById("numero");
var inputNome = document.getElementById('nome-titular');
var inputCvv = document.getElementById('cvv')
var erroNumero = document.getElementById("erro-numero");
var erroNome = document.getElementById("erro-nome");
var valorAnteriorNome = inputNome.value;
var valorAnteriorNumero = inputNumero.value;
var valorAnteriorCvv = inputCvv.value;



//Adicionando o texto ao cartão

inputNumero.onkeydown = () =>{
    document.querySelector('.num-cartao').innerText = inputNumero.value;
}

document.getElementById('nome-titular').onkeydown = () =>{
    document.querySelector('.nome-cartao').innerText = document.getElementById('nome-titular').value;
}


//Tirar letras e caracteres especiais

//Nome

inputNome.addEventListener("keypress", function(e) {
  var valor = this.value;
    if(!checkChar(e)) {
      erroNome.style.display = "block";
      e.preventDefault();
      
  }else {
    erroNome.style.display = "none";
    valorAnteriorNome = valor;
  }
});

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
    var pattern = '[a-zA-Z ]';
    if (char.match(pattern)) {
      return true;
  }
}


//numero

inputNumero.addEventListener("keypress", function(evento) {
  var valor = this.value;
    if(!checkCharNumber(evento)) {
      erroNumero.style.display = "block";
      evento.preventDefault();
      
  }else {
    erroNumero.style.display = "none";
    valorAnteriorNumero = valor;
  }
});

function checkCharNumber(evento) {
    var char = String.fromCharCode(evento.keyCode);
    var patternNumber = '[0-9 ]';
    if (char.match(patternNumber)) {
      return true;
  }
}

//cvv

inputCvv.addEventListener("keypress", function(evt) {
  var valor = this.value;
    if(!checkCharCvv(evt)) {
      erroNumero.style.display = "block";
      evt.preventDefault();
      
  }else {
    erroNumero.style.display = "none";
    valorAnteriorCvv = valor;
  }
});

function checkCharCvv(evt) {
    var char = String.fromCharCode(evt.keyCode);
    var patterCvv = '[0-9]';
    if (char.match(patterCvv)) {
      return true;
  }
}



//Máscara Cartão 

inputNumero.addEventListener('keypress', () => {
    let inputLength = inputNumero.value.length

    if (inputLength == 4 || inputLength == 9 || inputLength == 14) {
        inputNumero.value += ' '
    }

  })





