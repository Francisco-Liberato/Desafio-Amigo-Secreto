//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

let listaNomes = document.getElementById('listaAmigos');

function adicionarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Por favor, digite um nome.');
    } else {
    let amigo = document.getElementById('amigo').value;
    amigos.push(amigo);
    console.log(amigos);
    limpar();
    mostrarAmigos();
} 
}

function limpar () {
    let teste = document.querySelector('input');
    teste.value = '';
}

function mostrarAmigos() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

        amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(amigo));
        ul.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, digite um nome.');
} else {
    let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O amigo sorteado é: ' + nomeSorteado;
}
}
