alert("Olá Seja Bem-Vindo")

let p1=prompt("Digite seu NOME:");

let p2=prompt("Digite um PODER que gostaria de ter:");

let p3=prompt("Digite o nome de um VILÃO:");

let p4=prompt("Digite um LUGAR que gostaria de estar:");

let msg= document.getElementById('msg')

msg.innerHTML ='<p>Olá ${p1} o seu poder é/a ${p2} você vai enfrentar o/a ${p3} no em ${p4}'