const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
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

btn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

