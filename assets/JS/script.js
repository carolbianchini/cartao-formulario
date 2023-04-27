document.getElementById('numero').oninput = () =>{
    document.querySelector('.num-cartao').innerText = document.getElementById('numero').value;
}

document.getElementById('nome-titular').oninput = () =>{
    document.querySelector('.nome-cartao').innerText = document.getElementById('nome-titular').value;
}

var filtroTeclas = function(event) {
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}

//*tirar número

var inputNome = document.querySelector("#nome-titular");
inputNome.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

document.querySelector("#cvv") // seleciona o campo pelo atributo "name"
.addEventListener("input", function(){ // evento "input" que detecta mudança de valor no campo
   var cars = this.value.length; //conta a quantidade de caracteres
   // se for menor ou igual a 50, altera texto com o valor no span
   if(cars <= 5) document.querySelector(".limite").textContent = cars;
});