const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('mouseover', function (event) {
    const elementoAnterior = event.relatedTarget;
    if (elementoAnterior !== btn && elementoAnterior !== color) {
        btn.style.backgroundColor = 'red';
    }
});
btn.addEventListener('mouseout', function (event) {
    const elementoAlvo = event.relatedTarget;
    if (elementoAlvo !== btn && elementoAlvo !== color) {
        btn.style.backgroundColor = 'blue';
    }
});

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;
});