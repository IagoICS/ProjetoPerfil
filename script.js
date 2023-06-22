function promptName() {
    let p1 = prompt("Digite seu NOME:");
    if (p1 !== null && p1 !== "") {
        promptPower(p1);
    }
}

function promptPower(name) {
    let p2 = prompt("Digite um PODER que gostaria de ter:");
    if (p2 !== null && p2 !== "") {
        promptVillain(name, p2);
    }
}

function promptVillain(name, power) {
    let p3 = prompt("Digite o nome de um VILÃO:");
    if (p3 !== null && p3 !== "") {
        promptPlace(name, power, p3);
    }
}

function promptPlace(name, power, villain) {
    let p4 = prompt("Digite um LUGAR que gostaria de estar:");
    if (p4 !== null && p4 !== "") {
        displayMessage(name, power, villain, p4);
    }
}

function displayMessage(name, power, villain, place) {
    let msg = document.getElementById('msg');
    msg.innerHTML = `<p>Olá ${name}, o seu poder é/a ${power}. Você vai enfrentar o/a ${villain} no ${place}.</p>`;
}

window.onload = function() {
    alert("Olá! Seja bem-vindo!");
    promptName();
};