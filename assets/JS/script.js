document.getElementById('numero').oninput = () =>{
    document.querySelector('.num-cartao').innerText = document.getElementById('numero').value;
}

document.getElementById('nome-titular').oninput = () =>{
    document.querySelector('.nome-cartao').innerText = document.getElementById('nome-titular').value;
}