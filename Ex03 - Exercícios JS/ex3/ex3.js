let nome = prompt("Digite seu nome: ");

while (nome === "") {
    alert("Digite um nome válido!");
    nome = prompt("Digite seu nome: ");
}

alert(`Olá ${nome}`);