const inptNumero1 = document.getElementById("inptNumero1");
const inptNumero2 = document.getElementById("inptNumero2");
const resultados = document.getElementById("resultados");

function calcular() {
    let numero1 = parseInt(inptNumero1.value);
    let numero2 = parseInt(inptNumero2.value);

    resultados.innerHTML = `
        ${numero1} + ${numero2} = ${numero1 + numero2}<br>
        ${numero1} - ${numero2} = ${numero1 - numero2}<br>
        ${numero1} * ${numero2} = ${numero1 * numero2}<br>
        ${numero1} / ${numero2} = ${numero1 / numero2}<br>
        ${numero1} ^ ${numero2} = ${numero1 ** numero2}
    `;
}