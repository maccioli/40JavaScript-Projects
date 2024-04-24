const btnDiminuir = document.getElementById('btnDiminuir');
const btnReseta = document.getElementById('btnResetar');
const btnAumenta = document.getElementById('btnAumentar');
const displayContador = document.getElementById('numeroDisplay');
let contadorNumero = 0;


function corPositivoNegativo() {
    if (contadorNumero < 0) {
        displayContador.style.color = 'red';
    } else {
        displayContador.style.color = 'blue';
    }
}

btnDiminuir.addEventListener('click', function () {
    contadorNumero--;
    displayContador.textContent = contadorNumero;
    corPositivoNegativo()
});
btnReseta.addEventListener('click', function () {
    contadorNumero = 0;
    displayContador.style.color = 'white';
    displayContador.textContent = contadorNumero;
});
btnAumenta.addEventListener('click', function () {
    contadorNumero++;
    displayContador.textContent = contadorNumero;
    corPositivoNegativo()
});