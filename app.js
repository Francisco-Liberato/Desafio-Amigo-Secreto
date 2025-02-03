//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Por favor, insira um nome.');
    } else {
    let amigo = document.getElementById('amigo').value;
    amigos.push(amigo);
    console.log(amigos);
    limpar();
} 
}

function limpar () {
    let teste = document.querySelector('input');
    teste.value = '';
}