const btnConteo = document.getElementById('boton-conteo')
const btnRandom = document.getElementById('boton-random')
let display = document.getElementById('display')
const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function displayRandom() {
    const random = Math.floor(Math.random() * (alfabeto.length - 0)) + 0
    display.innerText = alfabeto[random]
    console.log(random);

}
btnRandom.addEventListener('click', displayRandom)

let inicioCiclo = false
let intervalo
function actualizar() {
    if (inicioCiclo == true) {
        if (display.innerText == '...') {
            display.innerText = ''
        } else {
            display.innerText += '.'
        }
    } else {
        clearInterval(intervalo)
    }
}
function pensando() {
    if (inicioCiclo == false) {
        contar()

        intervalo = setInterval(actualizar, 250)
        inicioCiclo = true
        display.innerText = ''
        btnConteo.innerText = '¡BASTA!'
    } else {
        if (conteo == -1) {
            conteo = 0
        }
        display.innerText = alfabeto[conteo]
        clearInterval(loopConteo)
        conteo = -1

        inicioCiclo = false
        clearInterval(intervalo)
        btnConteo.innerText = 'Nueva letra'
    }
}
let conteo
let loopConteo
function contar() {
    conteo = -1
    const random = Math.floor(Math.random() * (800 - 100)) + 100
    loopConteo = setInterval(sumaMental, random)
    function sumaMental() {
        if (conteo == 26) {
            conteo = -1
        }
        conteo = conteo + 1
        console.log(conteo);
    }
    return conteo
}
btnConteo.addEventListener('click', pensando)