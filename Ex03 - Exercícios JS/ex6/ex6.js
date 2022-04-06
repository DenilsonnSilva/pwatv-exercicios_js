const inptNome = document.getElementById("inptNome");
const inptSobrenome = document.getElementById("inptSobrenome");

function exibirNome() {
    let nome = inptNome.value;
    let sobrenome = inptSobrenome.value;

    alert(`Olá, ${nome} ${sobrenome}`);
}

if (onfocus(document.getElementById("nome"))) {
    document.getElementById("nome").value = "";
}