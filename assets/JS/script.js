var inputNumero = document.getElementById("numero");
var inputNome = document.getElementById('nome-titular');
var inputCvv = document.getElementById('cvv')
var inputValidade = document.getElementById('validade')
var erroNumero = document.getElementById("erro-numero");
var erroNome = document.getElementById("erro-nome");
var erroCvv = document.getElementById("erro-cvv");
var erroValidade = document.getElementById("erro-validade");
var valorAnteriorNome = inputNome.value;
var valorAnteriorNumero = inputNumero.value;
var valorAnteriorCvv = inputCvv.value;
var valorAnteriorVal = inputValidade.value;



//Adicionando o texto ao cartão

inputNumero.oninput = () =>{
    document.querySelector('.num-cartao').innerHTML = inputNumero.value;
}

inputNome.oninput = () =>{
    document.querySelector('.nome-cartao').innerHTML = inputNome.value;
}

inputCvv.oninput = () =>{
  document.querySelector('.cvv-back').innerHTML = inputCvv.value;
}

inputValidade.oninput = () =>{
  document.querySelector('.validade-cartao').innerHTML = inputValidade.value;
}


//Tirar Números e caracteres especiais

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

//Tirar Letras e caracteres especiais

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
      erroCvv.style.display = "block";
      evt.preventDefault();
      
  }else {
    erroCvv.style.display = "none";
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

//Validade

inputValidade.addEventListener("keypress", function(event) {
  var valor = this.value;
    if(!checkCharVal(event)) {
      erroValidade.style.display = "block";
      inputValidade.style.border = "red"
      event.preventDefault();
      
  }else {
    erroValidade.style.display = "none";
    valorAnteriorVal = valor;
  }
});

function checkCharVal(event) {
    var char = String.fromCharCode(event.keyCode);
    var patterCvv = '[0-9]';
    if (char.match(patterCvv)) {
      return true;
  }
}



//Máscara Num. Cartão 

inputNumero.addEventListener('keypress', () => {
    let inputLength = inputNumero.value.length

    if (inputLength == 4 || inputLength == 9 || inputLength == 14) {
        inputNumero.value += ' '
    }

  })

  //Máscara Validade

  inputValidade.addEventListener('keypress', () => {
    let inputLength = inputValidade.value.length

    if (inputLength == 2) {
      inputValidade.value += '/'
    }
  })


//Animação Cartão

  document.querySelector('#cvv').onmouseenter = () =>{
    document.querySelector('.cartao').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.zIndex = '1';
}

document.querySelector('#cvv').onmouseleave = () =>{
    document.querySelector('.cartao').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    document.querySelector('.back').style.zIndex = '0';
    
}


